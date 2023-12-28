import Link from "next/link";
/**
 * @todo mejorar el estilo
 */
export default function NotFound() {
  return (
    <div className="py-20 px-6 max-w-screen-xl mx-auto dark:text-gray-300 text-gray-500 grid place-content-center place-items-center w-full h-screen z-0 relative">
      <h2 className="text-xl md:text-3xl font-extrabold">No encontrado</h2>
      <p>No se pudo encontrar la página</p>
      <Link className="dark:hover:text-white hover:text-black" href="/">
        Volver al inicio
      </Link>
    </div>
  );
}
