import { Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="shadow-sm shadow-green-600/10">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <div>
          <span className="text-3xl font-bold uppercase text-green-600">
            DEV.
          </span>
          <span className="text-2xl">davimoliveira</span>
        </div>

        <button>
          <Menu size={32} className="hover:text-gray-200" />
        </button>
      </nav>
    </header>
  )
}
