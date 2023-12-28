import { eventsData } from "@/assets/data";
import CardItem from "@/components/events/cardItem";
import SubTitle from "@/components/layout/subTitle";

const AcercaDeNosotrosPage = () => {
  return (
    <div>
      <span className="text-base opacity-50">cds {'>'} Eventos</span>
      <SubTitle isDoc isTitle className="text-black dark:text-white">
        Eventos
      </SubTitle>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 snap-x gap-4 mt-4 relative">
        {eventsData
          .reverse()
          .map((event, index) => (
            <CardItem key={index} event={event} finalized={event.finalized} isCard={true} />
          ))}
        {/* Eventos Proximos */}
        {/* {eventsData
          .filter((event) => event.finalized === false)
          .map((event, index) => (
            <CardItem key={index} event={event} finalized={!event.finalized} />
          ))} */}
      </ul>
    </div>
  );
};

export default AcercaDeNosotrosPage;
