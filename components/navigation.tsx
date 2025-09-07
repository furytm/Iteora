"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Image src="/images/ite-ora-logo.png" alt="Ite Ora" width={120} height={40} className="h-10 w-auto" />
            <div className="block">
              <span className="text-[#000035] font-serif text-lg font-semibold leading-tight">
                Ite Ora's
                <br />
                Kitchen
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center ml-auto">
            <div className="flex items-baseline space-x-8 mr-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-[#000035] px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#order"
                className="text-gray-700 hover:text-[#000035] px-3 py-2 text-sm font-medium transition-colors"
              >
                Order
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#000035] px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
            <Button className="bg-[#000035] hover:bg-[#000035]/90 text-white">Order Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#000035] p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#about" className="text-gray-700 hover:text-[#000035] block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#order" className="text-gray-700 hover:text-[#000035] block px-3 py-2 text-base font-medium">
                Order
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#000035] block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-[#000035] hover:bg-[#000035]/90 text-white">Order Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
