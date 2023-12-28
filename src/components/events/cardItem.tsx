"use client";
import { Event } from "@/assets/data";
import Image from "next/image";
import { useState } from "react";
import { Ticket } from "../shared/icons";
import Link from "next/link";

const Description = ({ description }: { description: string[] }) => {
  const [paragraphSize] = useState<string[]>(
    description.join("\n").length <= 170
      ? description
      : description
        .join("(x)")
        .substring(0, 170)
        .concat("... ver más.")
        .split("(x)")
  );
  return (
    <p className="text-sm lg:text-md dark:text-gray-300 h-full relative flex flex-col gap-2 overflow-hidden">
      {paragraphSize.map((desc, index) => {
        return <span key={index}>{desc}</span>;
      })}
    </p>
  );
};

type Props = {
  event: Event;
  finalized: boolean;
  isCard?: boolean
};

const CardItem = ({ event, finalized, isCard = false }: Props) => {
  return (
    <>
      <li
        className={`${isCard || finalized
          ? "w-full"
          : "w-full shadow-2xl hover:shadow-3xl sm:flex-row sm:max-h-[318px]"
          } bg-white dark:bg-primaryDark shrink-0 snap-center flex flex-col border border-dashed border-gray-500/30 rounded-xl overflow-hidden dark:hover:bg-gray-500/10 hover:bg-gray-500/10 dark:hover:border-white hover:border-gray-500 transition-all cursor-pointer [&>div]:dark:hover:border-white [&>div]:hover:border-gray-500 relative`}
      >
        <Link href={`/cds/eventos/${event.id}`}
          className={`${isCard || finalized
            ? "w-full"
            : "w-full shadow-lg hover:shadow-xl sm:flex-row sm:max-h-[318px]"
            } bg-white dark:bg-primaryDark shrink-0 snap-center flex flex-col border border-dashed border-gray-500/30 rounded-xl overflow-hidden dark:hover:bg-gray-500/10 hover:bg-gray-500/10 dark:hover:border-white hover:border-gray-500 transition-all cursor-pointer [&>div]:dark:hover:border-white [&>div]:hover:border-gray-500 relative`}
        >
          <figure
            className={`${isCard || finalized ? "w-full" : "w-full sm:w-1/2 shrink-0 relative"
              } m-0 p-0 w-full overflow-hidden aspect-square object-contain`}
          >
            <Image
              src={event.images[0]}
              alt={event.title}
              width={280}
              height={278}
              className={`${isCard || finalized ? "w-full" : "h-full"} w-full h-full object-cover transition-transform`}
            />
          </figure>
          <div
            className={`${isCard || finalized ? "sm:border-l-0" : "w-full sm:w-1/2 justify-between gap-3 sm:border-t-0"
              } flex flex-col px-3 border-t py-4 sm:border-l border-gray-500/30 border-dashed relative transition-colors shrink-0`}
          >
            <span className={`${!finalized ? "text-green-500" : "dark:text-gray-400"} text-sm`}>{event.date}</span>
            <span
              className={`${isCard || finalized
                ? "dark:text-white text-black font-bold"
                : "border border-red-500 w-fit px-3 rounded-full text-red-500 bg-red-500/20"
                }`}
            >
              {event.type}
            </span>
            <h3
              className={`${isCard || finalized ? "" : "md:text-xl font-extrabold"} text-lg`}
            >
              {event.title}
            </h3>
            {isCard || !finalized && (
              <>
                <Description description={event.description} />
                <span className="flex flex-row items-center justify-center gap-3 text-lg">
                  <Ticket />
                  Consigue tu Ticket
                </span>
              </>
            )}
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
