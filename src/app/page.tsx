import BtnAnimated from "@/components/button/btnAnimated";
import Events from "@/components/events";
import Gallery from "@/components/gallery";
import Paragraph from "@/components/paragraph";
import Tooltip from "@/components/shared/tooltip";
import TextBrand from "@/components/textBrand";
import { getRandomNumber } from "@/utils/logic";
import Image from "next/image";
import Link from "next/link";

const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-4xl font-semibold lg:text-6xl pb-7 leading-normal lg:max-w-5xl">
      {children}
    </h2>
  );
};

export default function Home() {
  return (
    <>
      <section className="w-full h-full pt-32 pb-20 px-5 max-w-4xl md:py-32 2xl:py-36 xl:px-0 mx-auto">
        <BtnAnimated page={false} random={getRandomNumber(1, 3) - 1} />
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
        <p className="pt-6 text-sm text-center text-gray-500 dark:text-gray-300 [text-wrap:balance] md:text-xl lg:text-2xl">
          Aquí nos reunimos apasionados por la programación y el desarrollo de
          software para impulsar nuestro crecimiento y mejora constante.
        </p>
        <p className="flex flex-col md:flex-row justify-center items-center pt-6 gap-4 z-50">
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
      <section className="px-5 pb-20 dark:text-gray-300 text-gray-600 text-base flex flex-col gap-4 w-fit max-w-4xl xl:px-0 mx-auto md:text-xl lg:text-2xl md:pb-32 font-display">
        <p>🔥 Comunidad en crecimiento</p>
        <p className="">
          👨🏻‍💻 Explora Todos los Aspectos del Desarrollo de Software: Desde Web y
          Móvil hasta Backend y Frontend, ¡y Mucho Más!
        </p>
        <p>✨ Reuniones de Confraternización para miembros activos</p>
        <p>🚀 ¡Aquí, tu potencial es ilimitado!</p>
      </section>
      <hr className="border-gray-500/30" />
      <section className="w-full py-32">
        <article className="max-w-screen-xl flex flex-col justify-center lg:items-center mx-auto lg:text-center px-6">
          <SubTitle>
            Únase a una Comunidad de{" "}
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
      <section className="w-full py-32 bg-gradient-to-t to-transparent via-transparent from-gray-500/10">
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
            <BtnAnimated
              page={true}
              href="/como-ser-parte"
              content="¿Comó ser parte de CDS?"
            />
          </div>
        </article>
      </section>
      {/* <section
        className="pb-32 xl:py-32 xl:px-0 flex flex-col justify-center md:flex-row relative text-base
      [&>p]:md:dark:bg-black/80 [&>p]:md:bg-white/80 [&>p]:text-gray-800 [&>p]:dark:text-gray-300 [&>p]:rounded-xl [&>p]:md:py-6 [&>p]:px-6 [&>p]:md:px-8 gap-4"
      >
        <CarouselImages />
        <p className="backdrop-blur-sm md:text-xl lg:text-2xl xl:text-4xl xl:leading-10 md:font-extrabold md:absolute top-[calc(100vh)] md:w-1/2 right-6 pt-4">
          Nuesta comunidad se enfoca principalmente en potenciar tus habilidades
          como{" "}
          <TextBrand className="md:text-red-500 md:dark:text-red-500">
            Desarrollador de Software.
          </TextBrand>
        </p>
        <p className="md:dark:bg-black/80 md:bg-white/80 backdrop-blur-sm md:absolute top-[calc(160vh)] lg:top-[calc(180vh)] xl:top-[calc(200vh)] md:w-1/2 left-6 rounded-xl md:font-extrabold md:text-xl lg:text-2xl xl:text-4xl xl:leading-10">
          Celebramos{" "}
          <TextBrand className="md:text-blue-500 md:dark:text-blue-500">
            reuniones semanales
          </TextBrand>{" "}
          donde los miembros comparten sus{" "}
          <TextBrand className="md:text-yellow-400 md:dark:text-yellow-500">
            avances
          </TextBrand>{" "}
          y lo que han aprendido durante la semana.
        </p>
        <p className="md:dark:bg-black/80 md:bg-white/80 backdrop-blur-sm md:absolute top-[calc(220vh)] lg:top-[calc(260vh)] xl:top-[calc(300vh)] md:w-1/2 left-6 rounded-xl md:font-extrabold md:text-xl lg:text-2xl xl:text-4xl xl:leading-10">
          Desde nuevos conceptos hasta las{" "}
          <TextBrand className="md:text-pink-500 md:dark:text-pink-500">
            últimas tendencias
          </TextBrand>
          , estamos aquí para apoyarnos mutuamente y{" "}
          <TextBrand className="md:text-cyan-500 md:dark:text-cyan-500">
            resolver dudas
          </TextBrand>{" "}
          👨🏻‍💻
        </p>
        <p className="md:dark:bg-black/80 md:bg-white/80 backdrop-blur-sm md:absolute top-[calc(280vh)] lg:top-[calc(340vh)] xl:top-[calc(400vh)] md:w-fit rounded-xl inset-auto md:mx-auto md:font-extrabold md:text-4xl xl:text-5xl xl:leading-10 flex flex-row md:justify-center font-bold text-black dark:text-white text-xl">
          <TextBrand className="md:text-red-500 dark:md:text-red-500">
            ¿
          </TextBrand>
          Quiénes somos
          <TextBrand className="md:text-blue-500 dark:md:text-blue-500">
            ?
          </TextBrand>
        </p>
        <p className="md:dark:bg-black/80 md:bg-white/80 backdrop-blur-sm md:absolute top-[calc(340vh)] lg:top-[calc(420vh)] xl:top-[calc(500vh)] rounded-xl inset-auto md:mx-auto md:text-xl lg:text-2xl xl:text-4xl md:font-extrabold md:leading-tight flex flex-col md:w-fit">
          <span>Somos un espacio de colaboración donde compartimos:</span>
          <TextBrand className="md:text-red-500 dark:md:text-red-500">
            Recursos académicos,
          </TextBrand>
          <TextBrand className="md:text-sky-500 dark:md:text-sky-500 leading-9">
            Oportunidades laborales,
          </TextBrand>
          <TextBrand className="md:text-pink-500 dark:md:text-pink-500">
            Eventos,
          </TextBrand>
          <span>Y noticias relevantes en el mundo del desarrollo.</span>
        </p>
        <p className="md:dark:bg-black/80 md:bg-white/80 backdrop-blur-sm md:absolute top-[calc(400vh)] lg:top-[calc(500vh)] xl:top-[calc(600vh)] md:w-fit rounded-xl  inset-auto md:mx-auto md:text-xl lg:text-2xl xl:text-4xl md:font-extrabold md:leading-tight flex flex-col">
          Juntos, creamos un ambiente propicio para el{" "}
          <TextBrand className="md:text-yellow-400 dark:md:text-yellow-400">
            aprendizaje y el networking.
          </TextBrand>
        </p>
        <p className="md:dark:bg-black/80 md:bg-white/80 backdrop-blur-sm md:absolute top-[calc(460vh)] lg:top-[calc(580vh)] xl:top-[calc(700vh)] md:w-3/4 rounded-xl  inset-auto md:mx-auto md:text-xl lg:text-2xl xl:text-4xl md:font-extrabold md:leading-tight inline-block">
          Si eres un apasionado del{" "}
          <TextBrand className="md:text-green-500 dark:md:text-green-500">
            código
          </TextBrand>
          ,{" "}
          <TextBrand className="md:text-cyan-500 dark:md:text-cyan-500">
            la innovación
          </TextBrand>{" "}
          y el{" "}
          <TextBrand className="md:text-purple-500 dark:md:text-purple-500">
            desarrollo de software
          </TextBrand>
          , únete a nosotros y sé parte de esta emocionante travesía.
        </p>
        <p className="md:dark:bg-black/80 md:bg-white/80 backdrop-blur-sm md:absolute top-[calc(520vh)] lg:top-[calc(660vh)] xl:top-[calc(800vh)] md:w-fit rounded-xl  inset-auto mx-auto md:text-xl lg:text-2xl xl:text-4xl md:font-extrabold md:leading-tight inline-block text-center">
          <TextBrand className="md:text-red-500 dark:md:text-red-500">
            ¡
          </TextBrand>
          Juntos llevaremos nuestras habilidades al siguiente nivel
          <TextBrand className="md:text-blue-500 md:dark:md:text-blue-500">
            !
          </TextBrand>
          <span className="flex flex-row items-center justify-center pt-4">
            <Image src="/logo.png" width={40} height={30} alt="logo cds" />
          </span>
        </p>
      </section> */}
      <hr className="border-gray-500/30" />
      <Events />
    </>
  );
}
// 11111111
