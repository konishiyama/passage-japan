import React from "react"
import { useCollectionData } from "react-firebase-hooks/firestore"
import ArticleRoll from "../ArticleRoll"

export const IndexArticles = ({ firebase }) => {
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
  /*
  useEffect(() => {
    const unsubscribe = firebase.subscribeToMemberPosts({
      onSnapshot: (snapshot) => {
        console.log(snapshot);
        const snapshotMemberPosts = [];
        snapshot.forEach((doc) => {
          const data = doc.Ud.Ze.proto.mapValue.fields;
          snapshotMemberPosts.push({
            postNum: data.articleNum,
            date: data.date,
            userPhoto: data.userPhoto,
            title: data.title,
            username: data.username,
            ...doc.data(),
          });
        });
        setMemberPosts(snapshotMemberPosts);
      },
    });

    return () => {
      if (unsubscribe) {
        // unsubscribe();
      }
    };
  }, []);
  */

  return (
    <>
      <section>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 0.8rem 1.45rem`,
            overflowX: `hidden`,
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
