function Hero() {
    return (
        <section className="relative flex min-h-[420px] items-end overflow-hidden rounded-[2rem] bg-cover bg-center p-8 md:p-12"
            style={{
                backgroundImage:
                    "linear-gradient(180deg, rgba(15,23,42,0.25), rgba(15,23,42,0.9)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
            }}
        >
            <div className="max-w-xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-accent">
                    Clon educativo estilo Platzi-host
                </p>
                <h2 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
                    Encuentra tu próximo alojamiento
                </h2>
                <p className="mb-6 max-w-md text-lg leading-relaxed text-muted">
                    Explora departamentos, casas y cabañas para tu próxima
                    aventura.
                </p>
                <button className="rounded-full bg-accent px-6 py-3 mb-2 font-bold text-night transition-transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                    Explorar alojamientos
                </button>
            </div>
        </section>
    )
}

export default Hero