import { FieldErrors, UseFormRegister } from "react-hook-form"
import { TAuthRegister } from "../../types/authType"
import ErrorMessage from "../ErrorMessage"

type AuthRegisterFormProps = {
  register: UseFormRegister<TAuthRegister>,
  errors: FieldErrors<TAuthRegister>,
}

const AuthRegisterForm = ({ register, errors }: AuthRegisterFormProps) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="name"
          className="font-bold text-white">
          Nombre
        </label>

        <input
          id="name"
          type="name"
          placeholder="Nombre de Registro"
          className="w-full p-2 border focus:ring-2 text-white focus:ring-primary outline-none border-gray-300 rounded bg-transparent"
          {...register("name")} />
        {errors.name && <ErrorMessage message={errors.name.message} />}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="font-bold text-white">
          Email
        </label>

        <input
          id="email"
          type="email"
          placeholder="Email de Registro"
          className="w-full p-2 border focus:ring-2 text-white focus:ring-primary outline-none border-gray-300 rounded bg-transparent"
          {...register("email")} />

        {errors.email && <ErrorMessage message={errors.email.message} />}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="password"
          className="font-bold text-white">
          Contraseña
        </label>

        <input
          id="password"
          type="password"
          placeholder="Contraseña de Registro"
          className="w-full p-2 border focus:ring-2 text-white focus:ring-primary outline-none border-gray-300 rounded  bg-transparent"
          {...register("password")} />

        {errors.password && <ErrorMessage message={errors.password.message} />}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="confirmPassword"
          className="font-bold text-white">
          Confirmar Contraseña
        </label>

        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirmar Contraseña"
          className="w-full p-2 border focus:ring-2 text-white focus:ring-primary outline-none border-gray-300 rounded  bg-transparent"
          {...register("confirmPassword")} />

        {errors.confirmPassword && <ErrorMessage message={errors.confirmPassword.message} />}
      </div>
    </>
  )
}

export default AuthRegisterForm