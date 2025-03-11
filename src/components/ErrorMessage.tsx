type ErrorMessageProps = {
  message?: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <p className="text-sm text-red-600">{message}</p>
  )
}

export default ErrorMessage