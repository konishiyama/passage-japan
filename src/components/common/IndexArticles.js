import React from "react"
import { useCollectionData } from "react-firebase-hooks/firestore"
import Slider from "react-slick"
import styled from "styled-components"
import ArticleRoll from "../ArticleRoll"

const ArticleList = styled.ul`
  list-style: none;
  margin: 0;
  overflow-x: hidden;
  justify-content: space-between;
  // ul:after{
  // content:"";
  //   display:block;
  //   width: 160px;
  //   height:160px;
  // }
`

export const IndexArticles = ({ firebase }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 4,
    overflow: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  // const [articles, setArticles] = useState([])
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
  const latestArticles = articlesOrdered.slice(0, 4)
  console.log(articles)
  /*
  useEffect(() => {
    const unsubscribe = firebase.subscribeToArticles({
      onSnapshot: snapshot => {
        console.log(snapshot)
        const snapshotArticles = []
        snapshot.forEach(doc => {
          console.log(doc)
          const data = doc.Ud.Ze.proto.mapValue.fields
          snapshotArticles.push({
            articleNum: data.articleNum,
            content: data.content,
            date: data.date,
            thumnail: data.thumnail,
            title: data.title,
            ...doc.data(),
          })
        })
        setArticles(snapshotArticles)
      },
    })

    return () => {
      if (unsubscribe) {
        // unsubscribe();
      }
    }
  }, [])
  */

  return (
    <>
      <section>
        {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      > */}
        <ArticleList>
          <Slider {...settings}>
            {latestArticles.map(article => (
              <ArticleRoll
                key={article.id}
                title={article.title}
                time={article.time}
                thumnail={article.thumnail}
                id={article.id}
                date={article.date}
                articleNum={article.articleNum}
              />
            ))}
          </Slider>
        </ArticleList>
        {/* </div> */}
      </section>
    </>
  )
}
