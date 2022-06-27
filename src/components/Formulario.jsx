import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const Formulario = () => {
	
	const schema = Yup.object().shape({
		name: Yup.string()
			.min(3, "El nombre es muy corto")
			.max(20, "El nombre es muy largo")
			.required("El nombre es obligatorio"),
		company: Yup.string().required("La compañía es obligatoria"),
		email: Yup.string()
			.required("El email es obligatorio")
			.email("El email no es válido"),
		phone: Yup.number("El teléfono no es válido")
			.integer("El teléfono no es válido")
			.typeError("El teléfono no es válido")
			.positive("El teléfono no es válido"),
	})

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
					notes: ""
				}}
				onSubmit={(values) => {
					handleSubmit(values)
				}}
				validationSchema={schema}
			>
				{({ error }) => (
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
							<ErrorMessage
								component="p"
								name="name"
								className="text-md p-2 mt-4 bg-red-600 text-white text-center uppercase font-semibold rounded"
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
							<ErrorMessage
								component="p"
								name="company"
								className="text-md p-2 mt-4 bg-red-600 text-white text-center uppercase font-semibold rounded"
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
							<ErrorMessage
								component="p"
								name="email"
								className="text-md p-2 mt-4 bg-red-600 text-white text-center uppercase font-semibold rounded"
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
								id="phone"
								name="phone"
								type="tel"
								className="shadow bg-gray-100 border-gray-300 border rounded w-full py-2 px-3 text-gray-700 focus:ring-blue-500 focus:outline-blue-500"
								placeholder="Teléfono del cliente"
							/>
							<ErrorMessage
								component="p"
								name="phone"
								className="text-md p-2 mt-4 bg-red-600 text-white text-center uppercase font-semibold rounded"
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
							<ErrorMessage
								component="p"
								name="notes"
								className="text-md p-2 mt-4 bg-red-600 text-white text-center uppercase font-semibold rounded"
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
