"use client"

import { DropdownMenuCheckboxItemProps, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function DropdownMenuHome() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:cursor-pointer" asChild>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22.75 7H4.25C3.55964 7 3 7.55964 3 8.25C3 8.94036 3.55964 9.5 4.25 9.5H22.75C23.4404 9.5 24 8.94036 24 8.25C24 7.55964 23.4404 7 22.75 7Z" fill="#4D4D4D" />
          <path d="M22.75 15H11.25C10.5596 15 10 15.5596 10 16.25C10 16.9404 10.5596 17.5 11.25 17.5H22.75C23.4404 17.5 24 16.9404 24 16.25C24 15.5596 23.4404 15 22.75 15Z" fill="#4D4D4D" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl gap-2 m-1 p-1 w-[174px] bg-gray relative right-[5%]">
        <DropdownMenuItem className="flex w-full p-1 m-2 justify-center overflow-auto items-center focus:outline-none focus:none hover:cursor-pointer">Alternar modo</DropdownMenuItem>
        <DropdownMenuSeparator className="text-neutral-500"></DropdownMenuSeparator>
        <DropdownMenuItem className="flex w-full p-1 m-2 justify-center overflow-auto items-center focus:outline-none focus:none hover:cursor-pointer">Sobre</DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem className="flex w-full p-1 m-2 justify-center overflow-auto items-center focus:outline-none focus:none hover:cursor-pointer">Relatar um problema</DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem className="flex w-full p-1 m-2 justify-center overflow-auto items-center focus:outline-none focus:none hover:cursor-pointer">Sair</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
