'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Services', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-[#6045A5] shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-3 px-4 md:px-6"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center">
            <img
              src="/brandmaker-logo.png"
              alt="BrandMaker Logo"
              className="h-10 w-auto sm:h-10 md:h-12 lg:h-14 transition-transform hover:scale-105"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-full p-2.5 text-white hover:bg-white/10 transition"
          >
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-light text-white hover:text-purple-200 transition"
            >
              {item.name}
            </a>
          ))}
          <a
  href="#"
  className="font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition inline-flex items-center justify-center text-[#6045A5] bg-white"
>
  Get a Quote
</a>

        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-[#6045A5]/90 backdrop-blur-md px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
              <img
                src="/brandmaker-logo.png"
                alt="BrandMaker Logo"
                className="h-10 w-auto transition-transform hover:scale-105"
              />
            </a>
            <button
              type="button"
              className="rounded-full p-2.5 text-white hover:bg-white/10 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-white hover:text-purple-200 transition"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="block w-full text-center rounded-full border border-white bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-[#6045A5] transition"
            >
              Get a Quote
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
