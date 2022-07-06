import Link from "next/link"
import React, { useContext } from "react"
import {
  BlogPageArticles,
  PageCover,
  BottomBar,
  PageTitle,
} from "../components/common"
import CreateIcon from "@material-ui/icons/Create"
import { FirebaseContext } from "../components/Firebase"

const Blog = () => {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <section>
        <PageTitle>
          <span>ブログ</span>
          <p>Blog</p>
        </PageTitle>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 0.8rem`,
          }}
        >
          {!!firebase && <BlogPageArticles firebase={firebase} />}
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

export default Blog
