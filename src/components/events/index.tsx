import { Suspense } from "react";
import SubTitle from "../layout/subTitle";
import CardContainer from "./cardContainer";

const Events = () => {
  return (
    <section
      id="events"
      className="w-full max-w-screen-xl xl:px-0 mx-auto relativ py-20 md:py-32"
    >
      <div className="max-w-screen-xl lg:text-center flex lg:justify-center lg:items-center px-6">
        <SubTitle>Próximos Eventos</SubTitle>
      </div>
      <Suspense fallback={<div>Cargando proximos eventos</div>}>
        <CardContainer finalized={false} />
      </Suspense>
      <div className="max-w-screen-xl lg:text-center flex lg:justify-center lg:items-center px-6 pt-7">
        <SubTitle>Eventos Pasados</SubTitle>
      </div>
      <Suspense fallback={<div>Cargando eventos anteriores</div>}>
        <CardContainer finalized={true} />
      </Suspense>
    </section>
  );
};

export default Events;
