'use client'

import { Menu as MenuHamburger, X } from 'lucide-react'
import { useState } from 'react'
import { OverlayMenu } from './overlay-menu'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <header className="sticky top-0 z-50 bg-zinc-900 shadow-sm shadow-green-600/10">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <div>
          <span className="text-3xl font-bold uppercase text-green-600">
            DEV.
          </span>
          <span className="text-2xl">davimoliveira</span>
        </div>

        <button onClick={toggleMenu}>
          {menuOpen ? (
            <X size={32} className="hover:text-gray-200" />
          ) : (
            <MenuHamburger size={32} className="hover:text-gray-200" />
          )}
        </button>
      </div>

      <OverlayMenu isOpen={menuOpen} onOpenChange={setMenuOpen} />
    </header>
  )
}
