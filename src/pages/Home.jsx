import { useState, useEffect } from "react"
import Client from "../components/Client"

const Home = () => {
	const [clients, setClients] = useState([])

	useEffect(() => {
		const getClients = async () => {
			try {
				const url = "http://localhost:4000/clients"
				const response = await fetch(url)
				const result = await response.json()
				setClients(result)
			} catch (error) {
				console.log(error)
			}
		}
		getClients()
	}, [])

	const handleDelete = async (id) => {
		const confirmation = confirm("¿Estás seguro de eliminar este cliente?")
		if (confirmation) {
			try {
				const url = `http://localhost:4000/clients/${id}`
				const response = await fetch(url, {
				    method: "DELETE"
				})
				await response.json()
				setClients(clients.filter(client => client.id !== id))
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<div className="w-full">
			<h1 className="font-black text-4xl text-blue-600">Clientes</h1>
			<p className="mt-2">Administra tus clientes.</p>

			<div className="overflow-x-scroll md:overflow-auto">
				<table className="table-auto w-full mt-5 shadow bg-white">
					<thead className="bg-blue-600 text-white">
						<tr className="text-white">
							<th className="px-4 py-2">ID</th>
							<th className="px-4 py-2">Nombre</th>
							<th className="px-4 py-2">Contacto</th>
							<th className="px-4 py-2">Empresa</th>
							<th className="px-4 py-2">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{clients.map((client) => (
							<Client
								key={client.id}
								client={client}
								handleDelete={handleDelete}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Home
