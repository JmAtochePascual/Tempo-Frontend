import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="/Logo.png"
        alt="Imagen del logo"
        className="w-20 md:w-40" />
    </Link>
  )
}

export default Logo