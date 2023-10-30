"use client";
import React, { useState, useEffect } from "react";
import { Event, eventsData } from "@/assets/data";
import CardItem from "./cardItem";

type Props = {
  finalized: boolean;
};

const CardContainer = ({ finalized }: Props) => {
  const [events, setEvents] = useState<Event[] | null>(null);

  let cleanup = true;
  useEffect(() => {
    if (cleanup) {
      setEvents(eventsData.filter((event) => event.finalized === finalized));
    }

    return () => {
      cleanup = false;
    };
  }, []);

  return (
    <ul className="flex flex-row sm:justify-center gap-6 px-6 lg:py-10 overflow-x-auto snap-x snap-mandatory relative w-full">
      {events ? (
        events?.map((event, index) => (
          <CardItem key={index} event={event} finalized={finalized} />
        ))
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
