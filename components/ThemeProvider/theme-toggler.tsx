"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect } from "react"

export function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem disabled={theme === 'light'} className="flex flex-row justify-between cursor-pointer" onClick={() => setTheme("light")}>
          <span>Light</span> <SunIcon className="ml-2"></SunIcon>
        </DropdownMenuItem>
        <DropdownMenuItem disabled={theme === 'dark'} className="flex flex-row justify-between cursor-pointer" onClick={() => setTheme("dark")}>
          <span>Dark</span> <MoonIcon className="ml-2"></MoonIcon>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
