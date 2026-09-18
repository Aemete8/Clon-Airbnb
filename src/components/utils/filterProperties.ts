import type { Property } from '../../types/property'

export function filterProperties(
    properties: Property[],
    searchText: string,
    typeText: string,
): Property[] {
    const normalizedSearch = searchText.trim().toLowerCase();
    const normalizedType = typeText.trim().toLowerCase();

    return properties.filter((property) => {
        const matchesSearch = !normalizedSearch ||
            property.title.toLowerCase().includes(normalizedSearch) ||
            property.location.toLowerCase().includes(normalizedSearch);
        const matchesType = !normalizedType ||
            property.type.toLowerCase().includes(normalizedType);

        return matchesSearch && matchesType;
    });
}
