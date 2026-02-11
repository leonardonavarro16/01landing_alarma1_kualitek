"use client";


export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t-4 border-brand-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        </div>

        <div className="flex flex-col items-center justify-center gap-4 text-center text-sm sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Alarmas Barcelona - Todos los derechos reservados.</p>
          <div className="flex gap-6">
          </div>
        </div>
      </div>
    </footer>
  );
}
