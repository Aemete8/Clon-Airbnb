import { useNavigate } from "react-router";

export function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/profile", { replace: true });
    };

    return (
        <main className="flex min-h-[80vh] items-center justify-center px-6 flex-1 mx-auto">
            <div className="w-full max-w-md rounded-3xl border border-border bg-surface p-8 shadow-card">
                <div className="mb-8 text-center">
                    <p className="mb-1 text-sm font-bold uppercase tracking-[0.14em] text-accent">
                        Bienvenido
                    </p>
                    <h1 className="text-3xl font-extrabold tracking-tight">
                        Inicia sesión
                    </h1>
                    <p className="mt-2 text-sm text-muted">
                        Accede a tu cuenta para gestionar tus reservas.
                    </p>
                </div>

                <div className="space-y-4">
                    <label className="grid gap-1.5 text-sm font-bold">
                        Correo electrónico
                        <input
                            type="email"
                            placeholder="tu@correo.com"
                            className="w-full rounded-full border border-border bg-night px-4 py-3 font-sans text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </label>

                    <label className="grid gap-1.5 text-sm font-bold">
                        Contraseña
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full rounded-full border border-border bg-night px-4 py-3 font-sans text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </label>
                </div>

                <button
                    onClick={handleLogin}
                    className="mt-6 w-full rounded-full bg-accent py-3 font-bold text-night transition-transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                >
                    Ingresar
                </button>

                <p className="mt-4 text-center text-sm text-muted">
                    ¿No tienes cuenta?{" "}
                    <a
                        href="#"
                        className="font-semibold text-accent hover:underline"
                    >
                        Regístrate
                    </a>
                </p>
            </div>
        </main>
    );
}
