import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CDS - Comunidad de Desarrollo de Software",
  description:
    "Aquí nos reunimos apasionados por la programación y el desarrollo de software para impulsar nuestro crecimiento y mejora constante. Nos enfocamos en todos los aspectos del desarrollo, desde web y móvil hasta backend y frontend, ¡y mucho más!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="es">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
