import React, { useContext } from "react"
import Link from "next/link"
import TopCover from "../components/TopCover"
import About from "../components/About"
import Products from "../components/Products"
import Contact from "../components/Contact"
import {
  IndexArticles,
  IndexMemberPosts,
  SubTitle,
  SubTitleContact,
  SeeMore,
  SeeMore2,
} from "../components/common"
import { FirebaseContext } from "../components/Firebase"
import Fade from "react-reveal/Fade"

const IndexPage = () => {
  const { firebase, user } = useContext(FirebaseContext)

  return (
    <>
      <section>
        <TopCover></TopCover>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 650,
            padding: `0rem 1.5rem 0rem`,
          }}
        >
          <Fade bottom duration={2000}>
            <SubTitle>
              <span>熱門職缺</span>
            </SubTitle>
          </Fade>
          <Fade duration={2000}>
            {!!firebase && <IndexArticles firebase={firebase} />}
          </Fade>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.5rem 0`,
            }}
          >
            <div
              style={{
                margin: `2.5rem auto 0 `,
                textAlign: `center`,
              }}
            >
              <Fade bottom duration={2000}>
                <Link href="/about">
                  <SeeMore>》更多職缺</SeeMore>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 650,
            padding: `0rem 0.8rem 0`,
          }}
        >
          {!!user && (
            <div>
              <Fade bottom duration={2000}>
                <SubTitle>
                  <span>精選專欄</span>
                </SubTitle>
              </Fade>
              <Fade duration={2500}>
                {!!firebase && <IndexMemberPosts firebase={firebase} />}
              </Fade>
              <div
                style={{
                  margin: `2.5rem auto 0 `,
                  textAlign: `center`,
                }}
              >
                <Fade bottom duration={2000}>
                  <Link href="/member">
                    <SeeMore>更多專欄</SeeMore>
                  </Link>
                </Fade>
              </div>
            </div>
          )}
        </div>
        <Fade bottom duration={2000}>
          <SubTitleContact>
            <span>資訊</span>
          </SubTitleContact>
        </Fade>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 480,
            padding: `0rem 0.8rem`,
          }}
        >
          <Fade duration={2000}>
            <Contact></Contact>
          </Fade>
        </div>
      </section>
    </>
  )
}

export default IndexPage
