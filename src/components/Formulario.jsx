import { Formik, Form, Field } from "formik"

const Formulario = () => {
	
	const handleSubmit = (values) => {
		console.log(values)
	}
			
	return (
		<div className="bg-white py-10 px-5 my-5 rounded-md shadow-lg border-2 md:w-4/5 mx-auto">
			<h1 className="text-gray-600 font-bold text-2xl uppercase text-center">
				Agregar Cliente
			</h1>
			<Formik
				initialValues={{
					name: "",
					company: "",
					email: "",
					phone: "",
					notes: "",
				}}
				onSubmit={(values, { setSubmitting }) => {
					handleSubmit(values)
				}}
			>
				{() => (
					<Form className="mt-10">
						<div className="mb-4">
							<label
								className="block text-gray-700 font-bold mb-2"
								htmlFor="name"
							>
								Nombre: {""}
							</label>
							<Field
								id="name"
								name="name"
								type="text"
								className="shadow bg-gray-100 border-gray-300 border rounded w-full py-2 px-3 text-gray-700 focus:ring-blue-500 focus:outline-blue-500"
								placeholder="Nombre del cliente"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 font-bold mb-2"
								htmlFor="company"
							>
								Empresa: {""}
							</label>
							<Field
								id="company"
								name="company"
								type="text"
								className="shadow bg-gray-100 border-gray-300 border rounded w-full py-2 px-3 text-gray-700 focus:ring-blue-500 focus:outline-blue-500"
								placeholder="Empresa del cliente"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 font-bold mb-2"
								htmlFor="email"
							>
								Correo: {""}
							</label>
							<Field
								id="email"
								name="email"
								type="email"
								className="shadow bg-gray-100 border-gray-300 border rounded w-full py-2 px-3 text-gray-700 focus:ring-blue-500 focus:outline-blue-500"
								placeholder="Correo del cliente"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 font-bold mb-2"
								htmlFor="phone"
							>
								Teléfono: {""}
							</label>
							<Field
								id="telefono"
								name="phone"
								type="tel"
								className="shadow bg-gray-100 border-gray-300 border rounded w-full py-2 px-3 text-gray-700 focus:ring-blue-500 focus:outline-blue-500"
								placeholder="Teléfono del cliente"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 font-bold mb-2"
								htmlFor="notes"
							>
								Notas: {""}
							</label>
							<Field
								as="textarea"
								id="notes"
								name="notes"
								type="text"
								className="shadow bg-gray-100 border-gray-300 border rounded w-full py-2 px-3 h-40 text-gray-700 focus:ring-blue-500 focus:outline-blue-500"
								placeholder="Notas del cliente"
							/>
						</div>
						<input
							type="submit"
							value="Agregar Cliente"
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						/>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default Formulario
