import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner"

const ShowClient = () => {
	const [client, setClient] = useState({})
	const [loading, setLoading] = useState(false)

	const params = useParams()
	const { id } = params

	useEffect(() => {
		const getClient = async () => {
			try {
				setLoading(!loading)
				const url = `http://localhost:4000/clients/${id}`
				const response = await fetch(url)
				const result = await response.json()
				setClient(result)
			} catch (error) {
				console.log(error)
			} finally {
                setTimeout(() => {
                    setLoading(false)
                }, 750)
			}
		}
		getClient()
	}, [])

	if (loading) {
		return (
            <div className="w-full mx-auto mt-40">
			    <Spinner />
            </div>
		)
	}

    if (!client.id) {
        return (
            <div>
                <h1 className="text-4xl font-bold">Cliente no encontrado</h1>
            </div>
        )
    }

	return (
		<div className="w-full">
			<h1 className="font-black text-4xl text-blue-600">
				Cliente: {""}
				<span className="text-gray-600">{client.name}</span>
			</h1>
			<p className="text-2xl mt-4">
				<span className="font-bold uppercase text-gray-600">
					Email: {""}
				</span>
				{client.email}
			</p>
			<p className="text-2xl">
				<span className="font-bold uppercase text-gray-600">
					Empresa: {""}
				</span>
				{client.company}
			</p>
			{client.phone && (
				<p className="text-2xl">
					<span className="font-bold uppercase text-gray-600">
						Teléfono: {""}
					</span>
					{client.phone}
				</p>
			)}
			{client.notes && (
				<p className="text-2xl">
					<span className="font-bold uppercase text-gray-600">
						Notas: {""}
					</span>
					{client.notes}
				</p>
			)}
		</div>
	)
}

export default ShowClient
