import Image from "next/image";
import Link from "next/link";
import { getRandomNumber } from "@/utils/logic";

import LinkAnimated from "@/components/linkAnimated";
import Events from "@/components/events";
import Gallery from "@/components/gallery";
import Paragraph from "@/components/layout/paragraph";
import Tooltip from "@/components/shared/tooltip";
import TextBrand from "@/components/layout/textBrand";
import SubTitle from "@/components/layout/subTitle";
import { Check } from "@/components/shared/icons";

export default function Home() {
  return (
    <>
      <section className="w-full h-full pt-32 pb-20 px-5 max-w-4xl md:py-32 2xl:py-36 xl:px-0 mx-auto">
        <LinkAnimated page={false} random={getRandomNumber(1, 3) - 1} />
        <div className="absolute top-[64px] left-0 right-0 flex justify-center items-center blur-[150px]">
          <div className="bg-gradient-conic from-indigo-500 via-purple-500 to-pink-500  dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500  h-20 w-[50%] rounded-full opacity-50" />
        </div>
        <h1 className="bg-gradient-to-br dark:from-white dark:to-stone-500 from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem] text-transparent">
          <Image
            src="/minor.png"
            alt="logo cds"
            width={29.28}
            height={36}
            priority
            className="inline-flex h-9 md:h-16 w-fit md:w-fit mr-3 pointer-events-none"
          />
          Comunidad de Desarrollo de Software
          <Image
            src="/major.png"
            alt="logo cds"
            width={49.55}
            height={36}
            priority
            className="inline-flex h-9 md:h-16 w-fit md:w-fit ml-3 pointer-events-none"
          />
        </h1>
        <p className="pt-8 text-base text-center text-gray-500 dark:text-gray-300 [text-wrap:balance] md:text-xl lg:text-xl">
          Aquí nos reunimos apasionados por la programación y el desarrollo de
          software para impulsar nuestro crecimiento y mejora constante.
        </p>
        <p className="flex flex-col md:flex-row justify-center items-center pt-8 gap-4 z-50">
          <Tooltip content="Requisitos, pruebas y asignación de nivel.">
            <Link
              href="/como-ser-parte"
              className="px-7 py-2 text-white dark:text-black bg-black dark:bg-white rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              ¿Comó ser parte de CDS?
            </Link>
          </Tooltip>
          <Link
            href={"#events"}
            className="px-7 py-2 bg-transparent hover:bg-gray-500/30 rounded-full shadow-lg border border-gray-500/30 transition-all"
          >
            Eventos
          </Link>
        </p>
      </section>
      <section className="px-5 pb-20 dark:text-gray-300 text-gray-600 text-lg flex flex-col gap-4 w-fit max-w-4xl xl:px-0 mx-auto md:text-xl lg:text-xl md:pb-32 font-display [&>p]:flex [&>p]:items-start [&>p]:gap-3">
        <p>
          <Check className="text-cyan-600 h-6 w-6 relative flex-shrink-0" />
          Comunidad en crecimiento
        </p>
        <p>
          <Check className="text-red-500 h-6 w-6 relative flex-shrink-0" />
          Explora Todos los Aspectos del Desarrollo de Software
        </p>
        <p>
          <Check className="text-cyan-600 h-6 w-6 relative flex-shrink-0" />
          Desde Web y Móvil hasta Backend y Frontend, ¡y Mucho Más!
        </p>
        <p>
          <Check className="text-red-500 h-6 w-6 relative flex-shrink-0" />
          Reuniones de Confraternización para miembros activos
        </p>
        <p>
          <Check className="text-cyan-600 h-6 w-6 relative flex-shrink-0" />
          ¡Aquí, tu potencial es ilimitado!
        </p>
      </section>
      <hr className="border-gray-500/30" />
      <section className="w-full py-20 md:py-32">
        <article className="max-w-screen-xl flex flex-col justify-center lg:items-center mx-auto lg:text-center px-6">
          <SubTitle>
            Únanse a una Comunidad de{" "}
            <TextBrand className="md:text-yellow-500 md:dark:text-yellow-500">
              Desarrolladores
            </TextBrand>
          </SubTitle>
          <Paragraph>
            Nos enfocamos principalmente en potenciar tus habilidades como
            Desarrollador de Software. Desde nuevos conceptos hasta las últimas
            tendencias, estamos aquí para apoyarnos mutuamente y resolver dudas.
          </Paragraph>
        </article>
        <Gallery />
        <article className="max-w-screen-xl flex flex-col justify-center lg:items-center mx-auto lg:text-center px-6">
          <Paragraph>
            Celebramos{" "}
            <TextBrand className="md:text-green-500 md:dark:text-green-500">
              reuniones semanales
            </TextBrand>{" "}
            donde los miembros comparten sus avances y lo que han aprendido
            durante la semana.
          </Paragraph>
        </article>
      </section>
      <hr className="border-gray-500/30" />
      <section className="w-full py-20 md:py-32 bg-gradient-to-t to-transparent via-transparent from-gray-500/10">
        <article className="max-w-screen-xl flex flex-col justify-center lg:items-center mx-auto lg:text-center px-6">
          <SubTitle>¿Quiénes somos?</SubTitle>
          <div className="space-y-6">
            <Paragraph>
              Somos un espacio de colaboración donde compartimos{" "}
              <TextBrand className="md:text-blue-500 md:dark:text-blue-500">
                recursos académicos, Oportunidades laborales, Eventos
              </TextBrand>{" "}
              y noticias relevantes en el mundo del desarrollo. Juntos, creamos
              un ambiente propicio para el aprendizaje y el networking.
            </Paragraph>
            <Paragraph>
              Si eres un apasionado del código, la innovación y el desarrollo de
              software, únete a nosotros y sé parte de esta emocionante
              travesía.
              <TextBrand className="md:text-red-500 md:dark:text-red-500">
                ¡Juntos llevaremos nuestras habilidades al siguiente nivel!
              </TextBrand>
            </Paragraph>
            <LinkAnimated
              page={true}
              href="/como-ser-parte"
              content="¿Comó ser parte de CDS?"
            />
          </div>
        </article>
      </section>
      <hr className="border-gray-500/30" />
      <Events />
    </>
  );
}
