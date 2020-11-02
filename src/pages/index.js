import React, { useContext } from "react"
import styled from "styled-components"
import TopCover from "../components/TopCover"
import Declaration from "../components/Declaration"
import Activity from "../components/Activity"
import Products from "../components/Products"
import Contact from "../components/Contact"
import {
  IndexArticles,
  IndexMemberPosts,
  SubTitle,
  SeeMore,
} from "../components/common"
import { FirebaseContext } from "../components/Firebase"
import Fade from "react-reveal/Fade"

const IndexPage = ({ data }) => {
  const { user, firebase } = useContext(FirebaseContext)

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
          {/* <Declaration></Declaration> */}
          <Fade bottom duration={1500}>
            <SubTitle>
              <span>活動内容</span>
            </SubTitle>
          </Fade>
          <Activity></Activity>
          <Fade bottom duration={1500}>
            <SubTitle>
              <span>商品について</span>
            </SubTitle>
          </Fade>
          <Products></Products>
        </div>
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
            <Fade bottom duration={1500}>
              <a
                // className="theme_color"
                style={{
                  padding: `0 1.5rem 0`,
                  textDecoration: `none`,
                  width: `35%`,
                  fontSize: `14px`,
                  color: `#fff`,
                  backgroundColor: `#800080`,
                  display: `block`,
                  textAlign: `center`,
                  border: `solid 1px #800080`,
                  padding: `0.5em`,
                  lineHeight: `1.5`,
                  margin: `1em auto 0`,
                  hover: { color: `#800080`, backgroundColor: `#fff` },
                }}
                href="/products"
              >
                商品一覧
              </a>
            </Fade>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 480,
            padding: `0rem 0.8rem 0`,
          }}
        >
          {!!user && (
            <div>
              <Fade bottom duration={1500}>
                <SubTitle>
                  <span>コミュニティー</span>
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
                <Fade bottom duration={1500}>
                  <a
                    style={{
                      padding: `0 1.5rem 0`,
                      textDecoration: `none`,
                      width: `35%`,
                      fontSize: `14px`,
                      color: `#fff`,
                      backgroundColor: `#800080`,
                      display: `block`,
                      textAlign: `center`,
                      border: `solid 1px #800080`,
                      padding: `0.5em`,
                      lineHeight: `1.5`,
                      margin: `1em auto 0`,
                      hover: { color: `#800080`, backgroundColor: `#fff` },
                    }}
                    href="/member"
                  >
                    投稿一覧
                  </a>
                </Fade>
              </div>
            </div>
          )}
        </div>
        <Fade bottom duration={1500}>
          <SubTitle>
            <span>ブログ</span>
          </SubTitle>
        </Fade>
        <Fade duration={1500}>
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
            <Fade bottom duration={1500}>
              <a
                style={{
                  padding: `0 1.5rem 0`,
                  textDecoration: `none`,
                  width: `35%`,
                  fontSize: `14px`,
                  color: `#fff`,
                  backgroundColor: `#800080`,
                  display: `block`,
                  textAlign: `center`,
                  border: `solid 1px #800080`,
                  padding: `0.5em`,
                  lineHeight: `1.5`,
                  margin: `1em auto 0`,
                  hover: { color: `#800080`, backgroundColor: `#fff` },
                }}
                href="/blog"
              >
                ブログ一覧
              </a>
            </Fade>
          </div>
        </div>
        <Fade bottom duration={1500}>
          <SubTitle>
            <span>お問合せ</span>
          </SubTitle>
        </Fade>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 480,
            padding: `0rem 0.8rem 2.45rem`,
          }}
        >
          <Contact></Contact>
        </div>
      </section>
    </>
  )
}

// const SeeMore = styled.a`
//   text-decoration: none;
//   color: #800080;
//   font-weight: bold;
//   p {
//     text-decoration: none important!;
//   }
//   &:hover {
//     opacity: 30%;
//     // transition: all 0.4s ease-in;
//   }
// `

// const SeeMore = styled.a`
//   width: 35%;
//   font-size: 14px;
//   color: #fff;
//   background-color: #800080;
//   display: block;
//   text-align: center;
//   border: solid 1px #800080;
//   padding: 0.5em;
//   line-height: 1.5;
//   text-decoration: none;
//   margin-top: 1em;
//   &:hover {
//     color: #800080;
//     background-color: #fff;
//     border: solid 1px #800080;
//     transition: all 0.2s ease-in;
//   }

//   @media (min-width: 768px) {
//     width: 20%;
//   }

//   @media (min-width: 1024px) {
//     width: 15%;
//   }
// `

export default IndexPage
