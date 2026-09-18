import type { FormEvent } from 'react'
import SearchField from './SearchField'

interface SearchBoxProps {
    value: string
    searchedValue: string
    onChange: (value: string) => void
    onSearch: (value: string) => void
    onClear: () => void
    type: string
    onChangeType: (value: string) => void
    searchedType: string
    onSearchType: (value: string) => void
}

function SearchBox({ value, searchedValue, onChange, onSearch, onClear, type, onChangeType, searchedType, onSearchType }: SearchBoxProps) {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        onSearch(value.trim())
        onSearchType(type.trim())
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                className="relative z-10 -mt-8 mx-2 grid grid-cols-1 gap-3 rounded-3xl bg-surface p-4 shadow-float sm:mx-4 md:grid-cols-[1.2fr_1fr_0.8fr_auto] md:p-5">

                <SearchField
                    label="Ciudad"
                    type="text"
                    placeholder="Santiago, Chile"
                    icon={<svg className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
                        <circle cx="12" cy="10" r="2.5" /></svg>}
                    value={value}
                    searchedValue={searchedValue}
                    onChange={(event) => onChange(event.target.value)}
                    onClear={onClear}
                />

                <SearchField
                    label="Tipo"
                    type="text"
                    placeholder="Apartamento"
                    icon={<svg
                        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="m3 11.5 9-7.5 9 7.5M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
                    </svg>}

                    value={type}
                    searchedValue={searchedType}
                    onChange={(event) => onChangeType(event.target.value)}
                    onClear={onClear}
                />

                <SearchField
                    label="Huéspedes"
                    type="number"
                    placeholder="2"
                    icon={<svg
                        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="12" cy="8" r="3.5" />
                        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
                    </svg>}
                />

                <button type="submit" className="rounded-full bg-accent px-6 py-3 font-bold text-night transition-transform hover:-translate-y-0.5 active:translate-y-0 md:self-end">
                    Buscar
                </button>
            </form>

            <div className="flex justify-center">
                <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-3 text-sm text-muted">
                    Resultados de búsqueda:
                    <strong className="font-bold text-accent">
                        {searchedValue || "Sin resultados"}
                    </strong>
                </p>
            </div>
        </>
    )
}

export default SearchBox
