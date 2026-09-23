import { useParams } from "react-router";

export function BookingPage() {
    const { id } = useParams();

    return (
        <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="mb-4 text-lg font-extrabold tracking-tight">
                    Detalles de la propiedad
                </h2>
                <p className="text-sm text-muted">
                    Propiedad{" "}
                    <span className="font-semibold text-ink">#{id}</span>
                </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="mb-4 text-lg font-extrabold tracking-tight">
                    Fechas
                </h2>
                <div className="grid grid-cols-2 gap-3">
                    <label className="grid gap-1.5 text-sm font-bold">
                        Check-in
                        <input
                            type="date"
                            className="rounded-xl border border-border bg-night px-4 py-3 font-sans text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </label>
                    <label className="grid gap-1.5 text-sm font-bold">
                        Check-out
                        <input
                            type="date"
                            className="rounded-xl border border-border bg-night px-4 py-3 font-sans text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </label>
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="mb-4 text-lg font-extrabold tracking-tight">
                    Huéspedes
                </h2>
                <label className="grid gap-1.5 text-sm font-bold">
                    Número de huéspedes
                    <input
                        type="number"
                        min="1"
                        placeholder="2"
                        className="rounded-xl border border-border bg-night px-4 py-3 font-sans text-ink focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </label>
            </div>
        </div>
    );
}
