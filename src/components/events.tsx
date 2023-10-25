"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Ticket } from "./shared/icons";

type Event = {
  type: string;
  title: string;
  description: string[];
  date: string;
  place: string;
  images: string[];
  partners: string;
  price: string;
  finalized: boolean;
  attendees: number;
};

const events = [
  {
    type: "Conferencia",
    title: "Evento de Lanzamiento Demo",
    description: [
      "👋 ¡Hola!, ¿Te imaginas un lugar donde se reúnen apasionados de la programación y la innovación nunca se detiene?🤔🤯",
      "Te invitamos a unirte a la Comunidad de Desarrollo de Software (CDS)😎💻💯🔥",
      "Si eres un entusiasta del código y buscas un espacio para aprender, crear y conectarte con mentes brillantes, ¡CDS es tu destino!",
      "🌐💻 Ven al evento y unete a nosotros, y seamos parte de la revolución digital juntos.",
    ],
    date: "Sabado, 02 Septiembre",
    place: "Auditorio, modulo 236, FICCT-UAGRM",
    images: ["/evento-de-lanzamiento.jpg"],
    partners: "",
    price: "0.0",
    finalized: true,
    attendees: 0,
  },
  {
    type: "Conferencia",
    title: "Evento de Lanzamiento Oficial",
    description: [
      "👋 ¡Hola!, ¿Te imaginas un lugar donde se reúnen apasionados de la programación y la innovación nunca se detiene?🤔🤯",
      "Te invitamos a unirte a la Comunidad de Desarrollo de Software (CDS)😎💻💯🔥",
      "Si eres un entusiasta del código y buscas un espacio para aprender, crear y conectarte con mentes brillantes, ¡CDS es tu destino!",
      "🌐💻 Ven al evento y unete a nosotros, y seamos parte de la revolución digital juntos.",
    ],
    date: "Sabado, 02 Septiembre",
    place: "Auditorio, modulo 236, FICCT-UAGRM",
    images: ["/evento-de-lanzamiento.jpg"],
    partners: "",
    price: "0.0",
    finalized: true,
    attendees: 0,
  },

  {
    type: "Taller",
    title: "Node con Express",
    description: [
      "En esta ocasión te traemos este taller gratuito y con cupos limitados, donde aprenderás a crear un backend decente y bien hecho😌💻🚀",
      "Los únicos requisitos para entrar son:",
      "- Llevar su Laptop💻🔥",
      "- Saber un poco de JS🥴👌🏻",
      "- Saber un poco de BD (sin importar el SGBD)🤓",
      "- Tener conocimiento de POO⏱️",
      "- Prestar mucha atención y practicar lo aprendido en el taller😎",
      "- Hacer las instalaciones que se les irá indicando en el grupo de WhatsApp⚙️💻📲",
    ],
    date: "Miercoles, 30 Octubre",
    place: "Auditorio, modulo 236, FICCT-UAGRM",
    images: ["/node.jpeg"],
    partners: "",
    price: "0.0",
    finalized: false,
    attendees: 0,
  },
];

const Description = ({ description }: { description: string[] }) => {
  const [paragraphSize] = useState<string[]>(
    description.join("\n").length <= 140
      ? description
      : description
          .join("(x)")
          .substring(0, 140)
          .concat("... ver más.")
          .split("(x)")
  );
  return (
    <p className="text-sm dark:text-gray-300 h-full relative flex flex-col gap-2 overflow-hidden">
      {paragraphSize.map((desc, index) => {
        return <span key={index}>{desc}</span>;
      })}
    </p>
  );
};

const Events = () => {
  const [pastEvents, setPastEvents] = useState<Event[] | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[] | null>(null);
  let cleanup = true;
  useEffect(() => {
    if (cleanup) {
      setPastEvents(events.filter((event) => event.finalized));
      setUpcomingEvents(events.filter((event) => !event.finalized));
    }

    return () => {
      cleanup = false;
    };
  }, []);

  return (
    <section
      id="events"
      className="w-full max-w-screen-xl xl:px-0 mx-auto relativ py-32"
    >
      <h2 className="pl-6 pb-6 text-xl lg:text-2xl xl:text-3xl">
        Próximos Eventos
      </h2>
      <ul className="flex flex-row gap-6 px-6 pb-6 overflow-x-auto snap-x snap-mandatory relative">
        {upcomingEvents ? (
          upcomingEvents?.map((event, index) => (
            <li
              key={index}
              className="snap-center min-w-[280px] sm:min-w-[600px] max-w-sm md:max-w-2xl flex flex-col border border-dashed border-gray-500/30 rounded-xl overflow-hidden dark:hover:bg-gray-500/30 hover:bg-gray-500/30 dark:hover:border-white hover:border-gray-500 transition-all cursor-pointer shadow-md hover:shadow-lg [&>div]:dark:hover:border-white [&>div]:hover:border-gray-500
            sm:flex-row sm:max-h-[318px]"
            >
              <figure className="m-0 p-0 w-full aspect-square overflow-hidden sm:min-w-[318px] relative">
                <Image
                  src={event.images[0]}
                  alt={event.title}
                  width={280}
                  height={278}
                  className="w-full h-full object-cover transition-transform"
                />
              </figure>
              <div className="flex flex-col px-3 py-4 border-t sm:border-l border-gray-500/30 border-dashed relative transition-colors justify-between gap-3">
                <span className="dark:text-gray-400 text-sm">{event.date}</span>
                <span className="border border-red-500 w-fit px-3 rounded-full text-red-500 bg-red-500/20">
                  {event.type}
                </span>
                <h3 className="text-lg md:text-xl font-extrabold">
                  {event.title}
                </h3>
                <Description description={event.description} />
                <span className="flex flex-row items-center justify-center gap-3 text-l]">
                  <Ticket />
                  Consigue tu Ticket
                </span>
              </div>
            </li>
          ))
        ) : (
          <li
            className="snap-center w-full sm:min-w-[600px] max-w-sm md:max-w-2xl flex flex-col border border-dashed border-gray-500/30 rounded-xl overflow-hidden transition-all shadow-md
          sm:flex-row sm:max-h-[318px] animate-pulse"
          >
            <div className="m-0 p-0 w-full aspect-square overflow-hidden sm:w-[50%] relative" />
            <div className="flex flex-col h-[268px] px-6 py-6 border-t sm:border-l border-gray-500/30 border-dashed relative transition-colors justify-around sm:w-[50%] sm:h-full">
              <span className="bg-gray-500/30 rounded-full h-2 w-[35%]" />
              <span className="bg-gray-500/30 rounded-full h-2 w-[20%]" />
              <span className="bg-gray-500/30 rounded-full h-2 w-[80%]" />
              <span className="bg-gray-500/30 rounded-full h-2 w-[]" />
              <span className="bg-gray-500/30 rounded-full h-2 w-[]" />
              <span className="bg-gray-500/30 rounded-full h-2 w-[50%] mx-auto" />
            </div>
          </li>
        )}
      </ul>
      <h2 className="pl-6 pb-6 text-xl lg:text-2xl xl:text-3xl">
        Eventos Pasados
      </h2>
      <ul className="flex flex-row gap-6 px-6 pb-6 overflow-x-auto snap-x snap-mandatory relative">
        {pastEvents?.map((event, index) => (
          <li
            key={index}
            className="snap-center min-w-[280px] max-w-xs flex flex-col border border-dashed border-gray-500/30 rounded-xl overflow-hidden dark:hover:bg-gray-500/30 hover:bg-gray-500/30 dark:hover:border-white hover:border-gray-500 transition-colors cursor-pointer [&>div]:dark:hover:border-white [&>div]:hover:border-gray-500"
          >
            <figure className="m-0 p-0 overflow-hidden">
              <Image
                src={event.images[0]}
                alt={event.title}
                width={280}
                height={278}
                className="w-full object-cover transition-transform"
              />
            </figure>
            <div className="flex flex-col px-3 py-4 border-t border-gray-500/30 border-dashed relative transition-colors">
              <span className="dark:text-gray-400 text-sm">{event.date}</span>
              <span className="dark:text-white text-black font-bold">
                {event.type}
              </span>
              <h3>{event.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Events;
