import React from "react"
import styled from "styled-components"
// import Fade from "react-reveal/Fade"
import { Fade } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"

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

const fadeProperties = {
  delay: 2000,
  duration: 3000,
  transitionDuration: 2500,
  infinite: true,
  indicators: false,
  arrows: false,
}

const TopCover = () => {
  // const { user, firebase } = useContext(FirebaseContext)

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
