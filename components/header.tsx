"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Monitor } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2 hover:text-fuchsia-700 ">
        <Monitor />
          <Link href="/" className="text-xl font-bold text-black hover:text-fuchsia-700  transition-colors">
            Cientista da Computação
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#about" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
            Sobre mim
          </Link>
          <Link href="/#experience" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
            Educação
          </Link>
          <Link href="/#skills" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
            Habilidades
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">
            Contato
          </Link>
          <Link href="/studying" className="text-fuchsia-600 hover:text-black transition-colors text-sm font-medium ">
            Estudando
          </Link>


        </nav>

        <Button
          variant="ghost"
          className="px-0 text-bold hover:bg-transparent hover:text-primary focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle Menu</span>
          <div className="flex flex-col space-y-1">
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
          </div>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="border-t md:hidden bg-white">
          <nav className="flex flex-col space-y-3 p-4">
            <Link
              href="/#about"
              className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mim
            </Link>
            <Link
              href="/#experience"
              className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Educação
            </Link>

             <Link
              href="/#skills"
              className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Habilidades
            </Link>
            <Link
              href="/#contact"
              className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>

            <Link
              href="/studying"
              className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Estudando
            </Link>


          </nav>
        </div>
      )}
    </header>
  )
}
