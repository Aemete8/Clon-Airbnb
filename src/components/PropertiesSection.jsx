import PropertyCard from './PropertyCard.jsx'

function PropertiesSection({ properties }) {
    return (
        <section className="mt-14">
            <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                    <h3 className="mb-1 text-2xl font-extrabold tracking-tight">
                        Alojamientos disponibles
                    </h3>
                    <p className="text-muted">
                        {properties.length === 0
                            ? "No encontramos alojamientos con esos criterios."
                            : "Primera versión construida con React y Tailwind CSS."}
                    </p>
                </div>
            </div>

            {properties.length > 0 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} {...property} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default PropertiesSection