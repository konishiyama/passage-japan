import Link from "next/link"
import React, { useContext } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import Flash from "react-reveal/Flash"
import { FirebaseContext } from "./Firebase"

const Cover = styled.div`
  position: relative;
  top: 0%;
  display: flex;
  width: 100%;
  height: 750px;
  background-size: cover;
  background-position: top;
  align-items: center;
  justify-content: center;
  background-image: url("../../images/louis-hansel-shotsoflouis-geYw6L4-WU8-unsplash.jpg");
`

const A = styled.a`
  position: absolute;
  top: 65%;
  font-size: 14px;
  color: #fff;
`

const Scroll = styled.p`
  position: absolute;
  top: 94%;
  left: 50%;
  width: 80%;
  text-align: center;
  line-height: 1.5em;
  font-weight: bold;
  letter-spacing: 0.02em;
  width: 80%;
  font-size: 8px;
  color: #fff;
  margin: 0;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: "Roboto", sans-serif;

  @media (min-width: 768px) {
    top: 60%;
  }

  @media (min-width: 1024px) {
    font-size: 38px;
  }
`

const TopCover2 = () => {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <Cover>
        <Fade duration={2000}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ftopcover%2Ftopimage2.002.png?alt=media&token=afc60be5-d596-409a-8b62-8ab69d09b682"
            style={{
              position: `absolute`,
              top: `23%`,
              margin: `0 auto`,
              width: `80%`,
            }}
          ></img>
          <a
            href="/about"
            style={{
              color: `#fff`,
              margin: `0 auto`,
              position: `absolute`,
              fontSize: `14px`,
              fontFamily: `"Times New Roman", "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
              "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3", "HGS明朝E",
              "ＭＳ Ｐ明朝", "MS PMincho", serif;
            `,
              fontWeight: `normal`,
              top: `60%`,
              textDecoration: `none`,
            }}
          >
            >>農園について
          </a>
        </Fade>
        {/* {!!firebase && ( */}
        <Scroll>SCROLL</Scroll>
        <Flash duration={3500} forever>
          <KeyboardArrowDownIcon
            style={{
              color: `#fff`,
              margin: `0 auto`,
              position: `absolute`,
              fontSize: `25px`,
              fontWeight: `bold`,
              top: `97%`,
              left: `50%`,
              msTransform: `translate(-50%, -50%)`,
              WebkitTransform: `translate(-50%, -50%)`,
              transform: `translate(-50%, -50%)`,
            }}
          ></KeyboardArrowDownIcon>
        </Flash>
        {/* )} */}
      </Cover>
    </>
  )
}

export default TopCover2
