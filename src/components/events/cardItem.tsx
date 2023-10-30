import { Event } from "@/assets/data";
import Image from "next/image";
import { useState } from "react";
import { Ticket } from "../shared/icons";

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

type Props = {
  event: Event;
  finalized: boolean;
};

const CardItem = ({ event, finalized }: Props) => {
  return (
    <>
      <li
        className={`${
          finalized
            ? "max-w-xs"
            : "sm:min-w-[600px] max-w-sm md:max-w-2xl shadow-lg hover:shadow-xl sm:flex-row sm:max-h-[318px]"
        } snap-center min-w-[280px] flex flex-col border border-dashed border-gray-500/30 rounded-xl overflow-hidden dark:hover:bg-gray-500/10 hover:bg-gray-500/10 dark:hover:border-white hover:border-gray-500 transition-all cursor-pointer [&>div]:dark:hover:border-white [&>div]:hover:border-gray-500 relative`}
      >
        <figure
          className={`${
            finalized ? "" : "sm:min-w-[318px] relative"
          } m-0 p-0 w-full overflow-hidden aspect-square`}
        >
          <Image
            src={event.images[0]}
            alt={event.title}
            width={280}
            height={278}
            className={`${
              finalized ? "" : "h-full"
            } w-full object-cover transition-transform`}
          />
        </figure>
        <div
          className={`${
            finalized ? "sm:border-l-0" : "justify-between gap-3 sm:border-t-0"
          } flex flex-col px-3 border-t py-4 sm:border-l border-gray-500/30 border-dashed relative transition-colors`}
        >
          <span className="dark:text-gray-400 text-sm">{event.date}</span>
          <span
            className={`${
              finalized
                ? "dark:text-white text-black font-bold"
                : "border border-red-500 w-fit px-3 rounded-full text-red-500 bg-red-500/20"
            }`}
          >
            {event.type}
          </span>
          <h3
            className={`${
              finalized ? "" : "md:text-xl font-extrabold"
            } text-lg`}
          >
            {event.title}
          </h3>
          {!finalized && (
            <>
              <Description description={event.description} />
              <span className="flex flex-row items-center justify-center gap-3 text-lg">
                <Ticket />
                Consigue tu Ticket
              </span>
            </>
          )}
        </div>
      </li>
    </>
  );
};

export default CardItem;
