import Formulario from "../components/Formulario"

const NewClient = () => {
	return (
		<div className="w-full">
			<h1 className="font-black text-4xl text-blue-600">Nuevo Cliente</h1>
			<p className="mt-2">
				Llena los campos para agregar un nuevo cliente.	
			</p>
			<Formulario />
		</div>
	)
}

export default NewClient
