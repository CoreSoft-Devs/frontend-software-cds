import Link from "next/link";
/**
 * @todo mejorar el estilo
 */
export default function NotFound() {
  return (
    <div className="py-20 px-6 max-w-screen-xl mx-auto dark:text-gray-300 text-gray-500 grid place-content-center place-items-center w-full h-screen">
      <h2 className="text-xl md:text-3xl font-extrabold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="dark:hover:text-white hover:text-black" href="/">
        Return Home
      </Link>
    </div>
  );
}
