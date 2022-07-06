import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { TopLink } from "../components/common"
// import { Fade } from "react-slideshow-image"
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

const MainContainer = styled.div`
  z-index: 10;
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (min-width: 769px) {
    left: 1.5vw;
  }
`

const CoverTitleContainer = styled.div`
  z-index: 10;
  width: 70%;
  position: absolute;
  text-align: left;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    // display: flex;
  }

  @media (min-width: 769px) {
    // left: 1.5vw;
  }
`

const CoverTitle = styled.h1`
  z-index: 10;
  line-height: 42px;
  margin: 0 auto 15px;
  color: #fff;
  font-size: 34px;
  @media (max-width: 768px) {
    // display: flex;
  }

  @media (min-width: 769px) {
    // left: 1.5vw;
  }
`

const CoverSubTitle = styled.h2`
  z-index: 10;
  line-height: 30px;
  margin: 5px auto 0;
  color: #fff;
  font-size: 24px;
  @media (max-width: 768px) {
    // display: flex;
  }

  @media (min-width: 769px) {
    // left: 1.5vw;
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
      <MainContainer>
        <CoverPic
          src="https://firebasestorage.googleapis.com/v0/b/passage-76e68.appspot.com/o/cover.jpg?alt=media&token=835e1be6-c284-4da8-93b8-251bb908e983"
          alt="cover"
        />
        <CoverTitleContainer>
          <CoverTitle>赴日就職的起點</CoverTitle>
          <CoverSubTitle>Passage to your Career</CoverSubTitle>
          <CoverSubTitle>in Japan</CoverSubTitle>
          <TopLink href="/jobs">》最新職缺</TopLink>
        </CoverTitleContainer>
      </MainContainer>
    </>
  )
}

export default TopCover
