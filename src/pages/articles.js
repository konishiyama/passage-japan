import Link from "next/link"
import React, { useEffect, useContext, useState } from "react"
import styled from "styled-components"
import { BottomBar, Articles, PageTitle } from "../components/common"
import { FirebaseContext } from "../components/Firebase"
import CreateIcon from "@material-ui/icons/Create"

// const Write = styled.a`
//   text-decoration: none;
//   color: #808080;
//   color: #808080;
//   &:hover {
//     color: #39afca;
//     transition: all 0.4s ease-in;
//   }
// `

const Article = () => {
  const { user, firebase } = useContext(FirebaseContext)

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <section>
      <PageTitle>
        <span>精選專欄</span>
        <p>Articles</p>
      </PageTitle>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.5rem 1.45rem`,
        }}
      >
        {!!firebase && <Articles firebase={firebase} />}
        {!!user && (
          <BottomBar>
            <Link href="/postArticle">
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
        )}
      </div>
    </section>
  )
}

export default Article
