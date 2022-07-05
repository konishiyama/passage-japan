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
  height: 90vh;
  background-size: cover;
  background-position: top;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0.3))
  );
`

const CoverTitle = styled.p`
  position: fixed;
  z-index: 10;
  top: 200px;
  height: 65px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (min-width: 769px) {
    left: 1.5vw;
  }
`

// const fadeProperties = {
//   delay: 2000,
//   duration: 3000,
//   transitionDuration: 2500,
//   infinite: true,
//   indicators: false,
//   arrows: false,
// }

const TopCover = () => {
  // const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <CoverPic
        src="https://firebasestorage.googleapis.com/v0/b/passage-76e68.appspot.com/o/cover.jpg?alt=media&token=835e1be6-c284-4da8-93b8-251bb908e983"
        alt="cover"
      />
      {/* <CoverTitle>赴日就職的起點</CoverTitle> */}
    </>
  )
}

export default TopCover
