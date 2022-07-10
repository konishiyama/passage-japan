import React from "react"
import { useCollectionData } from "react-firebase-hooks/firestore"
import ArticleRoll from "../../ArticleRoll"

export const Articles = ({ firebase }) => {
  const [articles = []] = useCollectionData(
    firebase.db.collection("articles"),
    { idField: "id" }
  )
  const articlesOrdered = articles.sort(function (a, b) {
    if (a.articleNum < b.articleNum) {
      return 1
    } else {
      return -1
    }
  })
  const latestArticles = articlesOrdered.slice(0, 10)

  return (
    <>
      <section>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 0 1.45rem`,
          }}
        >
          {latestArticles.map(article => (
            <ArticleRoll
              key={article.id}
              title={article.title}
              id={article.id}
              date={article.date}
              postNum={article.postNum}
              writer={article.writer}
              writerPhoto={article.writerPhoto}
            />
          ))}
        </div>
      </section>
    </>
  )
}
