import BtnAnimated from "@/components/button/btnAnimated";
import CarouselImages from "@/components/carousel";
import Tooltip from "@/components/shared/tooltip";
import { getRandomNumber } from "@/utils/logic";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-black/80 relative">
      <section className="w-full h-full pt-32 pb-20 px-5 max-w-4xl md:py-32 2xl:py-36 xl:px-0 mx-auto">
        <BtnAnimated random={getRandomNumber(1, 3) - 1} />
        <h1 className="bg-gradient-to-br dark:from-white dark:to-stone-500 from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem] text-transparent">
          {/* <span className="text-blue-500">{"{"}</span> */}
          <Image
            src="/minor.png"
            alt="logo cds"
            width={29.28}
            height={36}
            priority
            className="inline-flex h-9 md:h-16 w-fit md:w-fit mr-3 pointer-events-none"
          />
          Comunidad de Desarrollo de Software
          {/* <span className="text-red-500">{"}"}</span> */}
          <Image
            src="/major.png"
            alt="logo cds"
            width={49.55}
            height={36}
            priority
            className="inline-flex h-9 md:h-16 w-fit md:w-fit ml-3 pointer-events-none"
          />
        </h1>
        <p className="pt-6 text-sm text-center text-gray-500 dark:text-gray-300 [text-wrap:balance] md:text-xl">
          Aquí nos reunimos apasionados por la programación y el desarrollo de
          software para impulsar nuestro crecimiento y mejora constante.
        </p>
        <article className="flex flex-col md:flex-row justify-center items-center pt-6 gap-4 z-50">
          <Tooltip content="¿Quíenes somos? ¿Como ser parte de CDS?">
            <button className="px-7 py-2 text-white dark:text-black bg-black dark:bg-white rounded-full shadow-lg hover:opacity-90 transition-opacity">
              ¿Qué es CDS?
            </button>
          </Tooltip>
          <button className="px-7 py-2 bg-transparent hover:bg-gray-500/30 rounded-full shadow-lg border border-gray-500/30 transition-all">
            Eventos
          </button>
        </article>
      </section>
      <section className="px-5 pb-20 dark:text-gray-300 text-base flex flex-col gap-4 w-fit max-w-4xl xl:px-0 mx-auto md:text-xl md:pb-32 font-display">
        <p>🔥 Comunidad en crecimiento</p>
        <p className="">
          👨🏻‍💻 Explora Todos los Aspectos del Desarrollo de Software: Desde Web y
          Móvil hasta Backend y Frontend, ¡y Mucho Más!
        </p>
        <p>✨ Reuniones de Confraternización para miembros activos</p>
        <p>🚀 ¡Aquí, tu potencial es ilimitado!</p>
      </section>
      <hr className="border-gray-500/30 pb-20 xl:py-0" />
      <section className="pb-32 xl:py-32 xl:px-0 flex flex-col justify-center md:flex-row relative">
        <CarouselImages />
        <article className="md:dark:bg-black/80 md:bg-white/80 text-black dark:text-white backdrop-blur-sm md:text-2xl md:absolute top-[calc(100vh)] md:w-1/2 right-6 rounded-xl py-6 px-8">
          Nuesta comunidad se enfoca principalmente en potenciar tus habilidades
          como Desarrollador de Software.
        </article>
        <article className="md:dark:bg-black/80 md:bg-white/80 text-black dark:text-white backdrop-blur-sm md:text-2xl md:absolute top-[calc(200vh)] md:w-1/2 left-6 rounded-xl py-6 px-8">
          Celebramos reuniones semanales donde los miembros comparten sus
          avances y lo que han aprendido durante la semana.
        </article>
        <article className="md:dark:bg-black/80 md:bg-white/80 text-black dark:text-white backdrop-blur-sm md:text-2xl md:absolute top-[calc(300vh)] md:w-1/2 left-6 rounded-xl py-6 px-8">
          Desde nuevos conceptos hasta las últimas tendencias, estamos aquí para
          apoyarnos mutuamente y resolver dudas 👨🏻‍💻
        </article>
        <article className="text-black dark:text-white md:text-2xl md:absolute top-[calc(400vh)] md:w-3/4 inset-auto mx-auto [&>p]:backdrop-blur-md [&>h2]:backdrop-blur-sm flex flex-col gap-4 [&>p]:rounded-xl [&>p]:py-2 [&>p]:px-8 [&>p]:dark:bg-black/80 [&>p]:w-fit">
          <h2 className="w-fit rounded-xl text-3xl font-extrabold py-2 px-8 dark:bg-black/80">
            ¿Quienes somos?
          </h2>
          <p className="flex flex-col">
            <span>Somos un espacio de colaboración donde compartimos:</span>
            <span>recursos académicos,</span>
            <span>oportunidades laborales,</span>
            <span>eventos</span>
            <span>y noticias relevantes en el mundo del desarrollo.</span>
          </p>
          <p>
            Juntos, creamos un ambiente propicio para el aprendizaje y el
            networking.
          </p>
          <p>
            Si eres un apasionado del código, la innovación y el desarrollo de
            software, únete a nosotros y sé parte de esta emocionante travesía.
            ¡Juntos llevaremos nuestras habilidades al siguiente nivel!
          </p>
        </article>
      </section>
    </main>
  );
}
// 11111111
