import React from "react"
import { useCollectionData } from "react-firebase-hooks/firestore"
import styled from "styled-components"
import JobsRoll from "../JobsRoll"

const JobList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
  margin: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  :after {
    content: "";
    display: block;
    width: 0px;
    height: 0px;

    @media (min-width: 768px) {
      width: 50%;
    }

    @media (min-width: 1024px) {
    }
  }
`

export const JobPageJobs = ({ firebase }) => {
  const [jobs = []] = useCollectionData(firebase.db.collection("jobs"), {
    idField: "id",
  })
  // const[articles, setArticles] = useState([]);
  const jobsOrdered = jobs.sort(function (a, b) {
    if (a.jobNum < b.jobNum) {
      return 1
    } else {
      return -1
    }
  })
  const latestJobs = jobsOrdered.slice(0, 7)

  return (
    <>
      <section>
        <JobList>
          {latestJobs.map(job => (
            <JobsRoll
              key={job.id}
              title={job.title}
              time={job.time}
              thumnail={job.thumnail}
              id={job.id}
              date={job.date}
              articleNum={job.articleNum}
            />
          ))}
        </JobList>
      </section>
    </>
  )
}
