import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const Activity = () => {
  return (
    <>
      <Container>
        <Fade bottom duration={2000}>
          <TitleContainer>
            <Cap>農</Cap>
            <Big>作物の生産</Big>
          </TitleContainer>
        </Fade>
        <Fade bottom duration={2000}>
          <Small>サツマイモを中心とした</Small>
          <Small>露地栽培作物を生産します</Small>
        </Fade>
        <Fade bottom duration={2000}>
          <ImgContainer>
            <Img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34308262.jpg?alt=media&token=93f4afce-ebc0-40fe-a52e-ecf5fe77dde3"
              alt="activity"
            ></Img>
          </ImgContainer>
        </Fade>
      </Container>
      <Container>
        <Fade bottom duration={2000}>
          <TitleContainer>
            <Cap>生</Cap>
            <Big>産物の販売</Big>
          </TitleContainer>
        </Fade>
        <Small>生産した農作物を</Small>
        <Small>ECサイト等を通じて、一般販売します</Small>
        <Fade bottom duration={2000}>
          <ImgContainer>
            <Img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34308397.jpg?alt=media&token=46de6936-fff3-424e-9b0b-d1f9f8523a6a"
              alt="activity"
            ></Img>
          </ImgContainer>
        </Fade>
      </Container>
      <Container>
        <Fade bottom duration={2000}>
          <TitleContainer>
            <Cap>情</Cap>
            <Big>報発信</Big>
          </TitleContainer>
        </Fade>
        <Fade bottom duration={2000}>
          <Small>農作物栽培に関するブログを作成し、</Small>
          <Small>定期的に発信します</Small>
        </Fade>
        <Fade bottom duration={2000}>
          <ImgContainer>
            <Img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226180.jpg?alt=media&token=6e97386b-9c3c-45c2-9440-6fcdbd9f469d"
              alt="activity"
            ></Img>
          </ImgContainer>
        </Fade>
      </Container>
    </>
  )
}

const Container = styled.div`
  text-align: center;
  margin: 0 auto 4rem;
  overflow: hidden;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;
`

const Cap = styled.span`
  text-align: left;
  margin: 0;
  color: #222;
  font-size: 30px;
`

const Big = styled.span`
  text-align: left;
  margin: 0;
  color: #222;
  font-size: 25px;
`

const Small = styled.p`
  text-align: left;
  margin: 0 auto;
  color: #222;
  font-size: 15px;
  // font-weight: bold;
`

const ImgContainer = styled.div`
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  height: 13rem;
  object-fit: cover;
  margin: 30px 0 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
`

export default Activity
