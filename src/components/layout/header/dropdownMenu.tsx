'use client'

import { HREF_ABOUT, HREF_CONTACT } from "@/assets/hrefs"
import Dropdown from "@/components/shared/dropdown"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const DropdownMenu = () => {
  const [openPopover, setOpenPopover] = useState(false);
  return (
    <Dropdown
      openPopover={openPopover}
      setOpenPopover={setOpenPopover}
      content={
        <div className="w-full rounded-md bg-white dark:bg-black p-2 sm:w-40">
          <Link
            href={HREF_ABOUT}
            className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-lightHover dark:hover:bg-darkHover active:bg-gray-200"
          >
            Acerca de Nosotros
          </Link>
          <Link
            href={HREF_CONTACT}
            className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-lightHover dark:hover:bg-darkHover active:bg-gray-200"
          >
            Contacto
          </Link>
          <button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-lightHover dark:hover:bg-darkHover active:bg-gray-200">
            Desarrollado por
          </button>
        </div>
      }
    >
      <button
        onClick={() => setOpenPopover(!openPopover)}
        className={`${openPopover && "dark:text-white"
          } flex gap-4 w-fit items-center justify-between transition-all hover:text-black dark:hover:text-white`}
      >
        <span>Nosotros</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${openPopover ? "rotate-180" : ""
            }`}
        />
      </button>
    </Dropdown>
  )
}

export default DropdownMenu