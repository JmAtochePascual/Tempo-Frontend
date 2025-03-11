import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { Link } from "react-router-dom"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { TUser } from "../types/authType"

type MenuHamburguersProps = {
  name: TUser['name']
}

const MenuHamburguers = ({ name }: MenuHamburguersProps) => {

  return (
    <div>
      <Menu>
        <MenuButton className="py-1.5 px-3 rounded-md text-sm/6 font-semibold text-white focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white bg-primary data-[hover]:bg-buttonHover data-[open]:bg-primary/80 cursor-pointer">
          <Bars3Icon className="w-6 h-6" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 flex flex-col origin-top-right mt-2 rounded-xl bg-white p-2 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">

          <p className="text-center text-black">
            Hola: <span className="font-bold text-green-600">{name}</span>
          </p>

          <MenuItem>
            <Link
              to="/"
              className="p-1 text-black font-semibold rounded-md hover:bg-primary/25">
              Cerar Sesión
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}

export default MenuHamburguers