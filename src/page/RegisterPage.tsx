import { toast, ToastContainer } from "react-toastify"
import AuthNavigation from "../components/AuthNavigation"
import Title from "../components/Title"
import AuthRegisterForm from "../components/auth/AuthRegisterForm"
import { zodResolver } from "@hookform/resolvers/zod"
import { authRegisterSchema, TAuthRegister } from "../types/authType"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { authRegister } from "../services/authService"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TAuthRegister>({
    resolver: zodResolver(authRegisterSchema)
  });

  // Mutation to register user
  const { mutate } = useMutation({
    mutationFn: authRegister,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (message) => {
      toast.success(message);
      reset()
      setTimeout(() => {
        navigate('/auth/login');
      }, 2000);
    }
  })

  // Handle register
  const handleRegister = (data: TAuthRegister) => mutate(data)

  return (
    <>
      <div className="min-h-screen grid md:grid-cols-2 place-items-center">
        <div className="py-12 flex flex-col gap-12">
          <Title
            message="Siempre con la premisa “¡si algo es bueno para nuestros clientes, es bueno para Tenpo!”" />

          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(handleRegister)}
            className="w-10/12 max-w-[400px] mx-auto flex flex-col gap-6">

            <AuthRegisterForm
              register={register}
              errors={errors}
            />

            <input
              type="submit"
              value='Crear Cuenta'
              className="w-full p-2 text-lg font-bold cursor-pointer rounded-full bg-primary hover:bg-primary/80 drop-shadow-lg" />
          </form>

          <AuthNavigation links={[
            { to: "/auth/login", text: "¿Ya tienes una cuenta?", strongText: "Inicia sesión aquí" },
          ]} />
        </div>

        <div className="hidden md:block md:w-full md:h-full md:bg-register md:bg-cover md:bg-center"></div>
      </div>

      <ToastContainer autoClose={2000} />
    </>
  )
}

export default RegisterPage