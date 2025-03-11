import { Link } from "react-router-dom"
import { TAuthLinks } from "../types/authType"
import AuthInfoSecurity from "./AuthInfoSecurity"

type AuthNavigationProps = {
  links: TAuthLinks
}

const AuthNavigation = ({ links }: AuthNavigationProps) => {
  return (
    <div className="w-11/12 max-w-[500px] mx-auto md:w-full">
      <nav className="mb-8 flex flex-col gap-2">
        {
          links.map((link) =>
            <Link
              key={link.to}
              to={link.to}
              className="block text-center text-sm text-white hover:underline">
              {link.text} <span className="text-primary font-bold">{link.strongText}</span>
            </Link>
          )
        }
      </nav>

      <AuthInfoSecurity />
    </div>
  )
}

export default AuthNavigation