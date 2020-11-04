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

const Scroll = styled.p`
  position: absolute;
  top: 92%;
  left: 50%;
  width: 80%;
  text-align: center;
  line-height: 1.5em;
  font-weight: bold;
  letter-spacing: 0.02em;
  width: 80%;
  font-size: 12px;
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

const TopCover = () => {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <Cover>
        <Fade duration={2000}>
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ftopcover%2Ftopimage2.002.png?alt=media&token=afc60be5-d596-409a-8b62-8ab69d09b682"
            style={{
              position: `absolute`,
              top: `23%`,
              margin: `0 auto`,
              width: `80%`,
            }}
          ></img> */}
          <p
            style={{
              color: `#fff`,
              margin: `0 auto`,
              position: `absolute`,
              fontSize: `28px`,
              fontFamily: ` "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
              "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
              "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
              "MS PMincho", serif;
            `,
              fontWeight: `normal`,
              top: `60%`,
              left: `15%`,
              textDecoration: `none`,
            }}
          >
            紫いもの山口農園
          </p>
          <p
            style={{
              color: `#fff`,
              margin: `0 auto`,
              position: `absolute`,
              fontSize: `18px`,
              fontFamily: ` "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
              "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
              "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
              "MS PMincho", serif;
            `,
              fontWeight: `normal`,
              top: `66%`,
              left: `15%`,
              textDecoration: `none`,
            }}
          >
            - Official Website -
          </p>
          <a
            href="/about"
            style={{
              color: `#fff`,
              margin: `0 auto`,
              border: `solid 1px #fff`,
              padding: `0.5em`,
              lineHeight: `1.5`,
              width: `30%`,
              position: `absolute`,
              fontSize: `14px`,
              textAlign: `center`,
              fontFamily: ` "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
              "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
              "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
              "MS PMincho", serif;
            `,
              fontWeight: `normal`,
              top: `73%`,
              left: `15%`,
              textDecoration: `none`,
            }}
          >
            農園概要 →
          </a>
        </Fade>
        {/* {!!firebase && ( */}
        <Scroll>SCROLL</Scroll>
        <Flash duration={3500} forever>
          {!!firebase && (
            <KeyboardArrowDownIcon
              style={{
                color: `#fff`,
                margin: `0 auto`,
                position: `absolute`,
                fontSize: `35px`,
                fontWeight: `bold`,
                top: `96%`,
                left: `50%`,
                msTransform: `translate(-50%, -50%)`,
                WebkitTransform: `translate(-50%, -50%)`,
                transform: `translate(-50%, -50%)`,
              }}
            ></KeyboardArrowDownIcon>
          )}
        </Flash>
        {/* )} */}
      </Cover>
    </>
  )
}

export default TopCover
