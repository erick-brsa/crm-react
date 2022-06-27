import { useNavigate } from "react-router-dom"

const Client = ({ client, handleDelete }) => {	
    
    const navigate = useNavigate()
    
    return (
		<tr className="hover:bg-gray-100 hover:tex-white border-b-2">
			<td className="px-4 py-2 font-bold">{client.id}</td>
			<td className="px-4 py-2 font-semibold">{client.name}</td>
			<td className="px-4 py-2">
				<p className="flex flex-nowrap gap-2">
					<span className="text-gray-800 uppercase font-semibold text-current">
						Email:{" "}
					</span>
					{client.email}
				</p>
				<p className="flex flex-nowrap gap-2">
					<span className="text-gray-800 uppercase font-semibold text-current">
						Tel:{" "}
					</span>
					{client.phone}
				</p>
			</td>
			<td className="px-4 py-2">{client.company}</td>
            <td className="px-4 py-2 flex flex-col items-center">
                <button
                    type="button"
                    className="bg-amber-500 hover:bg-amber-600 text-white w-full 2xl:w-2/4 block font-bold py-2 px-4 rounded uppercase text-xs"
                    onClick={() => navigate(`/clients/${client.id}`)}
                >
                    Ver
                </button>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white w-full 2xl:w-2/4 block font-bold py-2 px-4 rounded uppercase text-xs mt-2"
                    onClick={() => navigate(`/clients/edit/${client.id}`)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white w-full 2xl:w-2/4 block font-bold py-2 px-4 rounded uppercase text-xs mt-2"
                    onClick={() => handleDelete(client.id)}
                >
                    Eliminar
                </button>
            </td>
		</tr>
	)
}

export default Client
