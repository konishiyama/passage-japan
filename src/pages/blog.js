import Link from "next/link"
import React, { useContext } from "react"
import { BlogPageArticles, PageCover, BottomBar } from "../components/common"
import CreateIcon from "@material-ui/icons/Create"
import { FirebaseContext } from "../components/Firebase"

const Blog = () => {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <section>
        <PageCover>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226184.jpg?alt=media&token=3beb0ba8-d387-485e-874c-d0ae95c5b843"
            alt="coverImg"
          ></img>
          <p>
            <span>BLOG</span>
          </p>
        </PageCover>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 0.8rem 1.45rem`,
          }}
        >
          {!!firebase && <BlogPageArticles firebase={firebase} />}
          {/* {!!user &&  !!user.admin &&
          <BottomBar>
          <Link href="/postarticle">
            <CreateIcon 
              style={{
                color: `white`,
                backgroundColor: `#800080`,
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
