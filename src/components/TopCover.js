import Link from "next/link"
import React, { useContext } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { FirebaseContext } from "./Firebase"

const Cover = styled.div`
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
  height: 700px;
  background-color: #000000;
  display: inline-block;

  img {
    margin: 0;
    width: 100%;
    padding: 0 0 0;
    height: 700px;
    object-fit: cover;
    opacity: 65%;

    @media (min-width: 768px) {
      height: 500px;
    }

    @media (min-width: 1024px) {
      height: 630px;
    }
  }
`

const CoverP1 = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 80%;
  text-align: center;
  line-height: 1.5em;
  font-weight: bold;
  letter-spacing: 0.02em;
  width: 80%;
  font-size: 32px;
  color: #fff;
  margin: 0;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: "Times New Roman", "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3", "HGS明朝E",
    "ＭＳ Ｐ明朝", "MS PMincho", serif;

  @media (min-width: 768px) {
    top: 60%;
  }

  @media (min-width: 1024px) {
    font-size: 38px;
  }
`

const CoverP2 = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 80%;
  text-align: center;
  line-height: 1.5em;
  font-weight: bold;
  letter-spacing: 0.02em;
  width: 80%;
  font-size: 32px;
  color: #fff;
  margin: 0;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: "Times New Roman", "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3", "HGS明朝E",
    "ＭＳ Ｐ明朝", "MS PMincho", serif;

  @media (min-width: 768px) {
    top: 60%;
  }

  @media (min-width: 1024px) {
    font-size: 38px;
  }
`
const CoverP3 = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  text-align: center;
  line-height: 1.5em;
  font-weight: bold;
  letter-spacing: 0.02em;
  width: 80%;
  font-size: 32px;
  color: #fff;
  margin: 0;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: "Times New Roman", "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3", "HGS明朝E",
    "ＭＳ Ｐ明朝", "MS PMincho", serif;

  @media (min-width: 768px) {
    top: 60%;
  }

  @media (min-width: 1024px) {
    font-size: 38px;
  }
`

const A = styled.a`
  position: absolute;
  top: 65%;
  left: 32%;
  width: 36%;
  font-size: 14px;
  color: #fff;
  background-color: #800080;
  display: block;
  text-align: center;
  border: solid 1px #800080;
  padding: 0.5em;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 1em;
  font-family: "Times New Roman", "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3", "HGS明朝E",
    "ＭＳ Ｐ明朝", "MS PMincho", serif;
  &:hover {
    color: #800080;
    background-color: #fff;
    border: solid 1px #800080;
    transition: all 0.2s ease-in;
  }

  @media (min-width: 768px) {
    width: 20%;
  }

  @media (min-width: 1024px) {
    width: 15%;
  }
`

const TopCover = () => {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <Fade duration={2500}>
        <Cover>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226182.jpg?alt=media&token=b787c6a9-377d-4748-ab8e-ebba40509953"
            alt="cover"
          />
          <CoverP1>栃木県日光市</CoverP1>
          <CoverP2>むらさきいもの</CoverP2>
          <CoverP3>やまぐち農園</CoverP3>
          {/* <CoverP3></CoverP3> */}
          {/* <TopLogo src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ftopimage.001.png?alt=media&token=20df2b70-f586-4f18-8793-deff7ee816f1"></TopLogo> */}
          <Link href="/about">
            <A>農園概要 →</A>
          </Link>
          {!!firebase && (
            <KeyboardArrowDownIcon
              style={{
                color: `#fff`,
                margin: `0 auto`,
                position: `absolute`,
                fontSize: `35px`,
                fontWeight: `bold`,
                top: `95%`,
                left: `50%`,
                msTransform: `translate(-50%, -50%)`,
                WebkitTransform: `translate(-50%, -50%)`,
                transform: `translate(-50%, -50%)`,
              }}
            ></KeyboardArrowDownIcon>
          )}
        </Cover>
      </Fade>
    </>
  )
}

export default TopCover
