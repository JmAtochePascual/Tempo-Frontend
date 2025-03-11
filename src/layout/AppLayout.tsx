import { Navigate, Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Logo from "../components/Logo"
import MenuHamburguers from "../components/MenuHamburguers"
import { useAuth } from "../hook/useAuth"

const AppLayout = () => {
  const { data, isError, isLoading } = useAuth();

  if (isLoading) return <p>Cargando...</p>
  if (isError) return <Navigate to="/auth/login" />;
  if (data) return (
    <>
      <header className="mb-10 py-6 bg-primary/5">
        <div className="w-11/12 max-w-7xl mx-auto flex gap-4 justify-between items-center">
          <Logo />
          <MenuHamburguers name={data.name} />
        </div>
      </header>

      <main className="w-11/12 max-w-7xl mx-auto ">
        <Outlet />
      </main>

      <footer className=" bottom-0 w-full pt-10">
        <div className="w-11/12 max-w-7xl mx-auto py-5 text-center">
          <p className="text-white">
            <span className="font-bold">JMCode</span> | ©{new Date().getFullYear()} - Transformando ideas en realidad 💚
          </p>
        </div>
      </footer>

      <ToastContainer
        autoClose={1500}
      />
    </>
  )
}

export default AppLayout