import { Outlet, Link, useLocation } from "react-router-dom"
const Layout = () => {
	
	const location = useLocation()
	const { pathname } = location
	
	return (
		<div className="md:flex md:min-h-screen min-h-full">
			<div className="md:w-1/4 md:min-w-fit bg-gray-900 py-10">
				<h2 className="text-white text-3xl font-bold px-5 text-center">
					CRM - Clientes
				</h2>
				<nav className="mt-10">
					<Link
						className={`${pathname === '/clients' ? 'bg-blue-500' : 'hover:bg-gray-700'} text-white text-2xl px-5 py-2 block font-semibold`}
						to="/clients"
					>
						Clientes
					</Link>
					<Link
						className={`${pathname === '/clients/new' ? 'bg-blue-500' : 'hover:bg-gray-700'} text-white text-2xl px-5 py-2 block font-semibold`}
						to="/clients/new"
					>
						Nuevo cliente
					</Link>
				</nav>
			</div>
			<div className="md:w-3/4 p-10 md:h-screen md:overflow-auto">
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
