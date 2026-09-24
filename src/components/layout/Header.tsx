import { Link, useNavigate, NavLink, useLocation } from "react-router";
import { isAuthenticated, logout } from "../utils/auth";

export function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const navClass = ({ isActive }: { isActive: boolean }) =>
        `transition-colors hover:text-accent ${isActive ? "text-accent" : "text-ink/90"}`;

    return (
        <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 border-b border-border bg-surface/90 px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-surface/70 md:px-10">
            <Link to="/" className="flex items-center gap-2 text-accent">
                <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 11.5 12 4l9 7.5M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
                </svg>
                <span className="text-xl font-extrabold tracking-tight">
                    Platzi-host
                </span>
            </Link>

            <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold">
                <NavLink to="/search" className={navClass}>
                    Buscar
                </NavLink>
                <NavLink to="/favorites" className={navClass}>
                    Favoritos
                </NavLink>
                <NavLink to="/profile" className={navClass}>
                    Perfil
                </NavLink>
                {isAuthenticated() ? (
                    <button className="transition-colors hover:text-accent text-ink/90 cursor-pointer" type="button" onClick={handleLogout}>
                        Salir
                    </button>
                ) : (
                    <NavLink className={navClass} to="/login">Login</NavLink>
                )}
            </nav>
        </header>
    );
}
