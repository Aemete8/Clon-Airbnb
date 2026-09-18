function Header() {
    return (
        <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 border-b border-border bg-surface/90 px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-surface/70 md:px-10">
            <a href="#" className="flex items-center gap-2 text-accent">
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
            </a>

            <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold">
                <a href="#" className="text-ink/90 transition-colors hover:text-accent">
                    Alojamientos
                </a>
                <a href="#" className="text-ink/90 transition-colors hover:text-accent">
                    Experiencias
                </a>
                <a href="#" className="text-ink/90 transition-colors hover:text-accent">
                    Anfitriones
                </a>
            </nav>
        </header>
    )
}

export default Header