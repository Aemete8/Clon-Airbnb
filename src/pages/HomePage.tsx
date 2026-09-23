import { useState, useEffect } from "react";
import type { Property } from "../types/property";
import Hero from "../components/ui/Hero";
import SearchBox from "../components/ui/SearchBox";
import PropertiesSection from "../components/properties/PropertiesSection";
import { properties } from "../data/properties";
import { filterProperties } from "../components/utils/filterProperties";

export default function HomePage() {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [searchedType, setSearchedType] = useState("");
    const [propertiesFromAPI, setPropertiesFromAPI] = useState<Property[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const timerId = setTimeout(() => {
            try {
                setPropertiesFromAPI(properties);
            } catch {
                setError("No pudimos cargar las propiedades.");
            } finally {
                setIsLoading(false);
            }
        }, 2000);

        return () => clearTimeout(timerId);
    }, []);

    const filteredProperties = filterProperties(
        propertiesFromAPI,
        search,
        searchedType,
    );

    return (
        <main className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:px-10 flex-1 mx-auto">
            <Hero />

            <SearchBox
                value={city}
                onChange={setCity}
                searchedValue={search}
                onSearch={setSearch}
                onClear={() => {
                    setCity("");
                    setSearch("");
                    setType("");
                    setSearchedType("");
                }}
                type={type}
                onChangeType={setType}
                searchedType={searchedType}
                onSearchType={setSearchedType}
            />

            {isLoading && (
                <div className="mt-16 flex flex-col items-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-accent" />
                    <p className="text-sm font-semibold text-muted">
                        Cargando propiedades...
                    </p>
                </div>
            )}

            {error && (
                <p className="mt-16 text-center text-sm font-semibold text-red-400">
                    {error}
                </p>
            )}

            {!isLoading && !error && (
                <PropertiesSection properties={filteredProperties} />
            )}
        </main>
    );
}
