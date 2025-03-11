import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { TAuthLogin } from '../../types/authType'
import ErrorMessage from '../ErrorMessage'

type AuthLoginFormProps = {
  register: UseFormRegister<TAuthLogin>,
  errors: FieldErrors<TAuthLogin>,
}

const AuthLoginForm = ({ register, errors }: AuthLoginFormProps) => {
  return (
    <>
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
          {...register("email")}
          className="w-full p-2 border focus:ring-2 text-white focus:ring-primary outline-none border-gray-300 rounded bg-transparent" />
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
          {...register("password")}
          className="w-full p-2 border focus:ring-2 text-white focus:ring-primary outline-none border-gray-300 rounded  bg-transparent" />
        {errors.password && <ErrorMessage message={errors.password.message} />}
      </div>
    </>
  )
}

export default AuthLoginForm