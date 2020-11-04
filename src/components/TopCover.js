import Link from "next/link"
import React, { useContext } from "react"
import styled from "styled-components"
// import Fade from "react-reveal/Fade"
import { Fade } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import Flash from "react-reveal/Flash"
import { FirebaseContext } from "./Firebase"

// const Cover = styled.div`
//   position: relative;
//   top: 0%;
//   display: flex;
//   width: 100%;
//   height: 100vh;
//   background-size: cover;
//   background-position: top;
//   align-items: center;
//   justify-content: center;
//   // background-image: url("../../images/louis-hansel-shotsoflouis-geYw6L4-WU8-unsplash.jpg");
// `

const CoverPic = styled.img`
  position: relative;
  top: 0%;
  display: flex;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: top;
  align-items: center;
  justify-content: center;
  object-fit: cover;
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

const fadeProperties = {
  delay: 2000,
  duration: 3000,
  transitionDuration: 2500,
  infinite: true,
  indicators: false,
  arrows: false,
}

const TopCover = () => {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      {/* {!!firebase && ( */}
      <Fade {...fadeProperties}>
        <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ftopcover%2Fcover1.jpg?alt=media&token=57febd65-0051-4583-84ab-1dc63c60cf5c" />
        <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ftopcover%2Fcover2.jpg?alt=media&token=4422cd9f-c55e-43e7-889b-527812f363a8" />
        <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ftopcover%2Fcover3.jpg?alt=media&token=a1e08059-5c28-4246-baf7-e0ddccf81d6a" />
      </Fade>
      {/* )} */}
      {/* <Scroll>SCROLL</Scroll>
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
      </Flash> */}
    </>
  )
}

export default TopCover
