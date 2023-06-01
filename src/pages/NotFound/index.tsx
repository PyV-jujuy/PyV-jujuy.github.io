import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex flex-col justify-between">
      <h1 className="font-title text-9xl text-primary-blue">Error 404</h1>
      <p className="text-3xl">
        Pagina no encontrada: Regresa a la pagina principal para continuar
      </p>

      <Link
        to="/"
        className="font-title text-secondary-blue text-4xl hover:text-primary-blue"
      >
        Inicio
      </Link>
    </main>
  )
}
