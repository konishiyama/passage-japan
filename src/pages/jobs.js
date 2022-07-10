import Link from "next/link"
import React, { useContext } from "react"
import { PageCover, BottomBar, PageTitle } from "../components/common"
import { JobPageJobs } from "../components/common/JobPageJobs"
import CreateIcon from "@material-ui/icons/Create"
import { FirebaseContext } from "../components/Firebase"

const Jobs = () => {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <section>
        <PageTitle>
          <span>熱門職缺</span>
          <p>Jobs</p>
        </PageTitle>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 0.8rem`,
          }}
        >
          {!!firebase && <JobPageJobs firebase={firebase} />}
          {/* {!!user &&  !!user.admin &&
          <BottomBar>
          <Link href="/postarticle">
            <CreateIcon 
              style={{
                color: `white`,
                backgroundColor: `#39AFCA`,
                borderRadius: `50%`,
                padding: `0.5rem`,
                height: `3rem`,
                width: `3rem`,
                boxShadow: `rgba(0, 0, 0, 0.4) 0 2px 5px`,
              }}
            />
          </Link>
        </BottomBar>
        } */}
        </div>
      </section>
    </>
  )
}

export default Jobs
