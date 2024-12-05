import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex h-20 items-center justify-center px-4">
      <p className="text-center">
        Copyright &copy; {new Date().getFullYear()}{' '}
        <Link href="#" className="text-green-600">
          Davi Machado Oliveira
        </Link>
        . Todos os direitos reservados.
      </p>
    </footer>
  )
}
