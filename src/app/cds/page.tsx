import Paragraph from "@/components/layout/paragraph";
import SubTitle from "@/components/layout/subTitle";
import aboutData from '@/assets/about'
import ArticleContent from "@/components/layout/articleContent";

const CdsPage = () => {
  return (
    <>
      <div className="z-0">
        <span className="text-base opacity-50">Introducción</span>
        <SubTitle isDoc isTitle className="text-black dark:text-white">
          Introducción
        </SubTitle>
        <Paragraph isDoc>
          ¡Bienvenidos a CDS - Comunidad de Desarrollo de Software!
        </Paragraph>
        <Paragraph isDoc>
          Aquí nos reunimos apasionados por la programación y el desarrollo de
          software para impulsar nuestro crecimiento y mejora constante. Nos
          enfocamos en todos los aspectos del desarrollo, desde web y móvil
          hasta backend y frontend, ¡y mucho más! 🚀
        </Paragraph>
        <Paragraph isDoc>
          En nuestra comunidad, celebramos reuniones semanales donde los
          miembros comparten sus avances y lo que han aprendido durante la
          semana. Desde nuevos conceptos hasta las últimas tendencias, estamos
          aquí para apoyarnos mutuamente y resolver dudas.
        </Paragraph>
        {aboutData.map(({ content, links, title }, index) => (
          <ArticleContent
            key={index}
            content={content}
            links={links}
            title={title}
          />
        ))}
      </div>
    </>
  );
};

export default CdsPage;
