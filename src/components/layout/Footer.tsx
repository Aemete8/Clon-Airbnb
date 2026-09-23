export function Footer() {
    return (
        <footer className="border-t border-border bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-10">
                <span className="text-sm text-muted">
                    © 2026{" "}
                    <a
                        href="#"
                        className="text-ink transition-colors hover:text-accent"
                    >
                        Platzi Host
                    </a>
                    . All Rights Reserved.
                </span>

                <ul className="flex flex-wrap items-center gap-4 text-sm font-semibold text-muted">
                    <li>
                        <a
                            href="#"
                            className="transition-colors hover:text-accent"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="transition-colors hover:text-accent"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
