import Link from "next/link"
import React, { useEffect, useContext, useState } from "react"
import styled from "styled-components"
import {
  PageCover,
  BottomBar,
  MemberPosts,
  PageTitle,
} from "../components/common"
import { FirebaseContext } from "../components/Firebase"
import CreateIcon from "@material-ui/icons/Create"

const Write = styled.a`
  text-decoration: none;
  color: #808080;
  color: #808080;
  &:hover {
    color: #39afca;
    transition: all 0.4s ease-in;
  }
`

const Member = ({ data }) => {
  const { user, firebase } = useContext(FirebaseContext)

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <section>
      <PageTitle>
        <span>会員掲示板</span>
        <p>Community</p>
      </PageTitle>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.5rem 1.45rem`,
        }}
      >
        {!!firebase && <MemberPosts firebase={firebase} />}
        {!!user && (
          <BottomBar>
            <Link href="/member-write">
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

export default Member
