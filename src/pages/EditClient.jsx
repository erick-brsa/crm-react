import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Formulario from "../components/Formulario"
import Spinner from "../components/Spinner"

const EditClient = () => {

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
				console.log(result)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
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
				Editar Cliente
			</h1>
			<p className="mt-2">
				Utiliza este formulario para editar datos de un cliente.
			</p>
			<Formulario 
				client={client}
			/>
		</div>
	)
}

export default EditClient
