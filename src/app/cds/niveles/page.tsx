import levels from '@/assets/levels'
import ArticleContent from '@/components/layout/articleContent'
import Paragraph from '@/components/layout/paragraph'
import SubTitle from '@/components/layout/subTitle'
import React from 'react'


const LevelsPage = () => {
  return (
    <>
      <div className="z-0">
        <span className="text-base opacity-50">Introducción</span>
        <SubTitle isDoc isTitle className="text-black dark:text-white">
          Niveles en CDS
        </SubTitle>
        <Paragraph isDoc>
          ¡Bienvenido a la sección de Niveles de CDS! En nuestra comunidad, reconocemos y celebramos la diversidad de habilidades y experiencias en el mundo del desarrollo de software. Nuestro sistema de niveles está diseñado para fomentar el crecimiento personal y profesional de cada miembro.
        </Paragraph>
        {levels.map(({ content, links, title }, index) => (
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
}

export default LevelsPage
