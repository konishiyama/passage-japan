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
      {!!firebase && (
        <Fade {...fadeProperties}>
          <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ftopcover%2Flouis-hansel-shotsoflouis-geYw6L4-WU8-unsplash.jpg?alt=media&token=d927bd8e-7bc4-408c-b4f2-cf862b0acdba" />
          <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ftopcover%2Flouis-hansel-shotsoflouis-x1EjnCuwHDI-unsplash.jpg?alt=media&token=193386e5-7190-4a5b-8f4a-a60ae77623a6" />
          <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34308262.jpg?alt=media&token=93f4afce-ebc0-40fe-a52e-ecf5fe77dde3" />
        </Fade>
      )}
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
