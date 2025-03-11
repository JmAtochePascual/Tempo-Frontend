import { toast, ToastContainer } from "react-toastify"
import AuthLoginForm from "../components/auth/AuthLoginForm"
import AuthNavigation from "../components/AuthNavigation"
import Title from "../components/Title"
import { authLoginSchema, TAuthLogin } from "../types/authType"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { authLogin } from "../services/authService"

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TAuthLogin>({
    resolver: zodResolver(authLoginSchema)
  });

  // Mutation to login user
  const { mutate } = useMutation({
    mutationFn: authLogin,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (error) => {
      toast.success(error);
    }
  })

  // Handle login
  const handleLogin = (fromData: TAuthLogin) => mutate(fromData)

  return (
    <>
      <div className="min-h-screen grid md:grid-cols-2 place-items-center">
        <div className="py-12 flex flex-col gap-12">
          <Title
            message="Nuestro desafío es acelerar la inclusión digital y financiera de todos los habitantes de nuestro país." />

          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(handleLogin)}
            className="w-10/12 max-w-[400px] mx-auto flex flex-col gap-6">

            <AuthLoginForm
              register={register}
              errors={errors}
            />

            <input
              type="submit"
              value='Iniciar Sesión'
              className="w-full p-2 text-lg font-bold cursor-pointer rounded-full bg-primary hover:bg-primaryHover drop-shadow-lg" />
          </form>

          <AuthNavigation links={[
            { to: "/auth/register", text: "¿Aún no tienes cuenta?", strongText: "Regístrate ahora" },
          ]} />
        </div>

        <div className="hidden md:block md:w-full md:h-full md:bg-login md:bg-cover md:bg-center"></div>
      </div>

      <ToastContainer autoClose={2000} />
    </>
  )
}

export default LoginPage