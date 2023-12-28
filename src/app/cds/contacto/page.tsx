import contact from "@/assets/contact";
import ArticleContent from "@/components/layout/articleContent";
import Paragraph from "@/components/layout/paragraph";
import SubTitle from "@/components/layout/subTitle";

const ContactoPage = () => {
  return (
    <>
      <div className="z-0">
        <span className="text-base opacity-50">Contacto</span>
        <SubTitle isDoc isTitle className="text-black dark:text-white">
          Contacto de CDS
        </SubTitle>
        <Paragraph isDoc>
        ¡Nos encantaría escucharte! Si tienes preguntas, comentarios o simplemente quieres ponerte en contacto con nosotros, estamos aquí para ayudarte.
        </Paragraph>
        {contact.map(({ content, links, title }, index) => (
          <ArticleContent
            key={index}
            content={content}
            links={links}
            title={title}
          />
        ))}
      </div>
    </>
  )
};

export default ContactoPage;
