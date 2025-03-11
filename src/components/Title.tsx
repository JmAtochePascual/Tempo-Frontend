type TitleProps = {
  message: string
}

const Title = ({ message }: TitleProps) => {
  return (
    <div className="w-10/12 max-w-[500px] mx-auto md:w-11/12 lg:w-full">
      <h1 className="mb-2 text-5xl font-bold text-center text-primary md:text-6xl">Tempo</h1>
      <p className="text-lg text-center text-white">{message}</p>
    </div>
  )
}

export default Title