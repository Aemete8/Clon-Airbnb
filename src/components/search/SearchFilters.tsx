type SearchFiltersProps = {
    destination: string;
    type: string;
    onChange: (key: string, value: string) => void;
    onClear: () => void;
};

export function SearchFilters({
    destination,
    type,
    onChange,
    onClear,
}: SearchFiltersProps) {
    return (
        <section className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
                type="text"
                placeholder="Destino"
                value={destination}
                onChange={(event) =>
                    onChange("destination", event.target.value)
                }
                className="flex-1 rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <select
                value={type}
                onChange={(event) => onChange("type", event.target.value)}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent sm:w-44"
            >
                <option value="">Todos</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Casa">Casa</option>
                <option value="Loft">Loft</option>
                <option value="Cabaña">Cabaña</option>
                <option value="Estudio">Estudio</option>
                <option value="Villa">Villa</option>
            </select>

            <button
                type="button"
                onClick={onClear}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent sm:w-fit"
            >
                Limpiar filtros
            </button>
        </section>
    );
}
