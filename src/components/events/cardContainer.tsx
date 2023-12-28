"use client";
import React, { useState, useEffect } from "react";
import { Event, eventsData } from "@/assets/data";
import CardItem from "./cardItem";

type Props = {
  finalized: boolean;
};

const CardContainer = ({ finalized }: Props) => {
  const [events, setEvents] = useState<Event[] | null>(null);
  const [cleanup, setCleanup] = useState(true)

  useEffect(() => {
    if (cleanup) {
      setEvents(eventsData.filter((event) => event.finalized === finalized));
    }

    return () => setCleanup(false)
  }, [cleanup, finalized]);

  return (
    <ul className={`flex flex-row gap-6 px-6 lg:py-10 overflow-x-auto max-w-fit mx-auto snap-x snap-mandatory relative w-full shrink-0 ${finalized ? '[&>li]:max-w-[300px]' : '[&>li]:max-w-[700px]'}`}>
      {/* {events && events.length > 0 && !finalized && <div className="snap-center hidden lg:flex w-full h-full min-w-[20%] max-w-[20%] bg-red-500 shrink-0" />} */}
      {events ? (
        events.length > 0 ? events.reverse().map((event, index) => (
          <CardItem key={index} event={event} finalized={finalized} />
        )) : <p className="opacity-80 lg:text-center w-full">No hay eventos en este momento...</p>
      ) : !finalized ? (
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
      ) : (
        <div>...</div>
      )}
    </ul>
  );
};

export default CardContainer;
