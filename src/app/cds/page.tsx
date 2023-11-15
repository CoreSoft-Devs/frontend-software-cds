"use client";
import Paragraph from "@/components/layout/paragraph";
import SubTitle from "@/components/layout/subTitle";
import useNearScreen from "@/hooks/useNearScreen";
import Link from "next/link";
import { useRef } from "react";
const data = [
  {
    title: "¿Quiénes somos?",
    content: [
      "Somos un espacio de colaboración donde compartimos recursos académicos, oportunidades laborales eventos y noticias relevantes en el mundo del desarrollo. Juntos, creamos un ambiente propicio para el aprendizaje y el networking. Si eres un apasionado del código, la innovación y el desarrollo de software, únete a nosotros y sé parte de esta emocionante travesía. ¡Juntos llevaremos nuestras habilidades al siguiente nivel! 🤝",
    ],
    links: null,
  },
  {
    title: "Staff",
    content: [
      "En CDS, estamos respaldados por un equipo apasionado y dedicado que trabaja incansablemente para hacer de nuestra comunidad un lugar vibrante y en constante crecimiento. Conoce a los miembros de nuestro equipo, cuya misión es facilitar un ambiente propicio para el aprendizaje, la colaboración y la innovación en el desarrollo de software.",
      "[Aquí irá una card que contenga al equipo completo.]",
    ],
    links: null,
  },
  {
    title: "Miembros",
    content: [
      "Nuestra comunidad se enorgullece de contar con miembros apasionados y talentosos que comparten el amor por el desarrollo de software. Descubre quiénes son los individuos que forman parte de esta emocionante travesía y conéctate con mentes brillantes.",
      "¿Eres apasionado por el código, la innovación y el desarrollo de software? ¡Entonces, la Comunidad de Desarrollo de Software es el lugar perfecto para ti! En CDS, nos esforzamos por crear un entorno donde cada miembro pueda crecer, aprender y contribuir al mundo del desarrollo de software.",
    ],
    links: [
      { href: "#", content: "¿Cómo unirte?" },
      { href: "#", content: "Niveles" },
    ],
  },
  {
    title: "Vision",
    content: [
      "Ser la comunidad de desarrollo de software líder y referente a nivel global, donde cada miembro encuentra inspiración, apoyo y recursos para alcanzar su máximo potencial. Buscamos ser un espacio donde la innovación y la colaboración florezcan, impulsando el crecimiento colectivo y contribuyendo al avance constante del mundo del desarrollo de software.",
    ],
    links: null,
  },
  {
    title: "Mision",
    content: [
      "En CDS - Comunidad de Desarrollo de Software, nos comprometemos a proporcionar un entorno dinámico y enriquecedor para todos los apasionados por el desarrollo de software. Nuestra misión es fomentar el aprendizaje continuo, la colaboración activa y el crecimiento profesional. Buscamos ser el punto de encuentro donde las ideas se convierten en soluciones, donde las habilidades se perfeccionan y donde cada miembro encuentra las herramientas y el apoyo necesario para sobresalir en su trayectoria de desarrollo.",
    ],
    links: [{ href: "#", content: "Reglamento" }],
  },
];

const ArticleContent = ({
  content,
  links,
  title,
}: {
  content: string[];
  links: { href: string; content: string }[] | null;
  title: string;
}) => {
  const externalRef = useRef(null);
  const { isNearScreen } = useNearScreen({
    externalRef: externalRef,
    distance: "-100px",
  });

  return (
    <article ref={externalRef} id={"nav" + title}>
      <SubTitle isDoc={true}>{title}</SubTitle>
      {content.map((paragraph, index) => (
        <Paragraph key={index} isDoc>
          {paragraph}
        </Paragraph>
      ))}
      <Paragraph isDoc className="flex gap-2 items-center">
        {links?.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="px-3 py-1 rounded-md odd:text-red-500 odd:bg-red-500/10 odd:hover:bg-red-500/20 even:text-sky-500 even:bg-sky-500/10 even:hover:bg-sky-500/20"
          >
            {link.content}
          </Link>
        ))}
      </Paragraph>
    </article>
  );
};

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
        {data.map(({ content, links, title }, index) => (
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
