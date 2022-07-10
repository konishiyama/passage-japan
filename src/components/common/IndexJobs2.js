import React from "react"
import { useCollectionData } from "react-firebase-hooks/firestore"
import Slider from "react-slick"
import styled from "styled-components"
import JobsRoll from "../JobsRoll"

const JobList = styled.ul`
  list-style: none;
  margin: 0;
  overflow-x: hidden;
  justify-content: space-between;
`

export const IndexJobs2 = ({ firebase }) => {
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
  const [jobs = []] = useCollectionData(firebase.db.collection("jobs"), {
    idField: "id",
  })
  const jobsOrdered = jobs.sort(function (a, b) {
    if (a.jobNum < b.jobNum) {
      return 1
    } else {
      return -1
    }
  })
  const latestJobs = jobsOrdered.slice(0, 4)
  // console.log(articles)
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
        <JobList>
          <Slider {...settings}>
            {latestJobs.map(job => (
              <JobsRoll
                key={job.id}
                title={job.title}
                time={job.time}
                thumnail={job.thumnail}
                id={job.id}
                date={job.date}
                articleNum={job.jobNum}
              />
            ))}
          </Slider>
        </JobList>
        {/* </div> */}
      </section>
    </>
  )
}
