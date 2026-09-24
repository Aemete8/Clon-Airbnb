import { useSearchParams } from "react-router";
import PropertySection from "../components/properties/PropertiesSection";
import { properties } from "../data/properties";
import { SearchFilters } from "../components/search/SearchFilters";

export default function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const destination = searchParams.get("destination") || "";
    const type = searchParams.get("type") || "";

    const filteredProperties = properties.filter((property) => {
        const matchesDestination = property.location
            .toLowerCase()
            .includes(destination.toLowerCase());
        const matchesType = property.type
            .toLowerCase()
            .includes(type.toLowerCase());

        return matchesDestination && matchesType;
    });

    const handleFilterChange = (key: string, value: string) => {
        const nextParams = new URLSearchParams(searchParams);

        if (value) {
            nextParams.set(key, value);
        } else {
            nextParams.delete(key);
        }
        setSearchParams(nextParams);
    };

    return (
        <main className="flex-1 mx-auto w-full max-w-6xl px-6 pb-16 pt-8 md:px-10">
            <div className="mb-8">
                <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-ink">
                    Resultados de búsqueda
                </h1>
                <SearchFilters
                    destination={destination}
                    type={type}
                    onChange={handleFilterChange}
                    onClear={() => setSearchParams({})}
                />
            </div>

            <PropertySection properties={filteredProperties} />
        </main>
    );
}
