function PropertyCard(props) {
    return (
        <article className="group overflow-hidden rounded-2xl bg-surface shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className="relative">
                <img
                    src={props.image}
                    alt={props.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-night/80 px-2.5 py-1 text-xs font-bold backdrop-blur">
                    <svg className="h-3.5 w-3.5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2Z" />
                    </svg>
                    {props.rating}
                </span>
            </div>
            <div className="space-y-1 p-4">

                <div className="flex items-center justify-between pt-1">
                    <h4 className="font-bold">{props.title}</h4>
                    <p className="font-bold">{props.type}</p>
                </div>
                <p className="text-sm text-muted">{props.location}</p>

                <div className="flex items-center justify-between pt-1">
                    <strong className="text-lg">
                        ${props.price} <span className="text-sm font-medium text-muted">/ noche</span>
                    </strong>
                    <a href="#" className="text-sm font-semibold text-accent transition-transform hover:translate-x-0.5">
                        Ver detalles →
                    </a>
                </div>
            </div>
        </article>
    )
}

export default PropertyCard