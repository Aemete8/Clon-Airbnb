import { Link, useParams } from "react-router";
import { properties } from "../data/properties";

export function PropertyDetailPage() {
    const { id } = useParams();
    const property = properties.find((property) => property.id === Number(id));

    if (!property) {
        return (
            <main className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <h1 className="text-5xl font-extrabold tracking-tight text-accent">
                    Propiedad no encontrada
                </h1>
                <p className="text-sm text-muted">
                    La propiedad que buscas no existe o fue eliminada.
                </p>
                <Link
                    to="/search"
                    className="rounded-full bg-accent px-6 py-3 font-bold text-night transition-transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                >
                    Ver otras propiedades
                </Link>
            </main>
        );
    }

    return (
        <main className="flex-1 mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 pt-8 md:flex-row md:items-start md:px-10">
            {/* Imagen */}
            <div className="relative md:flex-1">
                <img
                    className="aspect-[4/3] w-full rounded-3xl object-cover"
                    src={property.image}
                    alt={property.title}
                />
                <span className="absolute left-4 top-4 rounded-full bg-night/80 px-3 py-1 text-xs font-semibold backdrop-blur text-ink">
                    {property.type}
                </span>
            </div>

            {/* Info */}
            <section className="flex md:flex-1 flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                        Alojamiento destacado
                    </p>
                    <h1 className="text-2xl font-bold leading-tight text-ink">
                        {property.title}
                    </h1>
                    <p className="text-sm text-muted">{property.location}</p>
                </div>

                <div className="flex flex-col gap-4 border-t border-border pt-4 mt-2">
                    <strong className="text-3xl font-extrabold tracking-tight text-accent">
                        ${property.price}
                        <span className="text-sm font-normal text-muted">
                            {" "}
                            / noche
                        </span>
                    </strong>
                    <Link
                        className="w-fit rounded-full bg-accent px-6 py-3 font-bold text-night transition-transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                        to={`/booking/${property.id}`}
                    >
                        Reservar ahora
                    </Link>
                </div>
            </section>
        </main>
    );
}
