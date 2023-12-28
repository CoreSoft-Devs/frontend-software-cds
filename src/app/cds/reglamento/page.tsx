import regulationData from "@/assets/regulation"
import ArticleContent from "@/components/layout/articleContent"
import SubTitle from "@/components/layout/subTitle"

const ReglamentoPage = () => {
  return (
    <>
      <div className="z-0">
        <span className="text-base opacity-50">cds {'>'} Reglamento</span>
        <SubTitle isDoc isTitle className="text-black dark:text-white">
          Reglamento de la Comunidad de Desarrollo de Software
        </SubTitle>
        {regulationData.map(({ content, links, title }, index) => (
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

export default ReglamentoPage