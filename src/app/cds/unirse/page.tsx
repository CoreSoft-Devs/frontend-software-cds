import joinData from "@/assets/join";
import ArticleContent from "@/components/layout/articleContent";
import Paragraph from "@/components/layout/paragraph";
import SubTitle from "@/components/layout/subTitle";
import LinkAnimated from "@/components/linkAnimated";

const UnirsePage = () => {
  return (<div className="z-0">
    <span className="text-base opacity-50">cds {'>'} Unirse</span>
    <SubTitle isDoc isTitle className="text-black dark:text-white">
      Únete a la Comunidad de Desarrollo de Software
    </SubTitle>
    <Paragraph isDoc>
      ¡Estamos emocionados de que estés considerando unirte a nuestra comunidad dedicada al desarrollo de software! En CDS, nos apasiona el código, la innovación y el crecimiento profesional. Si compartes nuestra pasión, ¡te invitamos a formar parte de esta emocionante travesía!
    </Paragraph>
    {joinData.map(({ content, links, title }, index) => (
      <ArticleContent
        key={index}
        content={content}
        links={links}
        title={title}
      />
    ))}
    <div className="pt-5">
      <LinkAnimated
        page={false}
        href={'#solicitar-unirse'}
        content="Solicitar Formulario"
      />
    </div>
    <Paragraph isDoc>
      ¡Esperamos darte la bienvenida a CDS y juntos llevar nuestras habilidades al siguiente nivel!
    </Paragraph>
  </div>)
};

export default UnirsePage;
