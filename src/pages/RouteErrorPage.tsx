import { Link, isRouteErrorResponse, useRouteError } from "react-router";

export default function RouteErrorPage() {
    const error = useRouteError();
    const status = isRouteErrorResponse(error) ? error.status : null;

    return (
        <main className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface border border-border">
                <svg
                    className="h-8 w-8 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
            </div>

            <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">
                    Error inesperado
                </p>
                <h1 className="text-3xl font-extrabold tracking-tight">
                    Algo salió mal
                </h1>
                <p className="max-w-md text-muted">
                    No pudimos cargar esta página. Intenta de nuevo o vuelve al
                    inicio.
                </p>
                {status && (
                    <p className="text-sm font-semibold text-faint">
                        Código de error: {status}
                    </p>
                )}
            </div>

            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => window.location.reload()}
                    className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0"
                >
                    Intentar de nuevo
                </button>
                <Link
                    to="/"
                    className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                >
                    Volver al inicio
                </Link>
            </div>
        </main>
    );
}
