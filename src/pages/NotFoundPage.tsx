import { Link } from "react-router";

export function NotFoundPage() {
    return (
        <main className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6 text-center">
            <p className="text-8xl font-extrabold text-accent">404</p>
            <h1 className="text-3xl font-extrabold tracking-tight">
                Página no encontrada
            </h1>
            <p className="max-w-md text-muted">
                La ruta que buscas no existe o fue movida. Vuelve al inicio para
                encontrar tu próximo alojamiento.
            </p>
            <Link
                to="/"
                className="rounded-full bg-accent px-6 py-3 font-bold text-night transition-transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
                Volver al inicio
            </Link>
        </main>
    );
}
