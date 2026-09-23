import { Outlet } from "react-router";

export function BookingLayout() {
    return (
        <main className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:px-10">
            <h1 className="mb-8 text-3xl font-extrabold tracking-tight">
                Flujo de reserva
            </h1>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                {/* Contenido del formulario — viene del Outlet */}
                <section className="flex-1">
                    <Outlet />
                </section>

                {/* Resumen lateral */}
                <aside className="w-full rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-24 lg:w-80">
                    <h2 className="mb-4 text-lg font-extrabold tracking-tight">
                        Resumen
                    </h2>
                    <p className="text-sm leading-relaxed text-muted">
                        Revisa la información antes de confirmar tu reserva.
                    </p>

                    <div className="my-4 border-t border-border" />

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted">Subtotal</span>
                            <span className="font-semibold">—</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted">Fees</span>
                            <span className="font-semibold">—</span>
                        </div>
                        <div className="my-2 border-t border-border" />
                        <div className="flex justify-between text-base">
                            <span className="font-bold">Total</span>
                            <span className="font-bold text-accent">—</span>
                        </div>
                    </div>

                    <button className="mt-6 w-full rounded-full bg-accent py-3 font-bold text-night transition-transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                        Confirmar reserva
                    </button>
                </aside>
            </div>
        </main>
    );
}
