import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const Activity = () => {
  return (
    <>
      <Container>
        {/* <Fade right duration={1500} distance="50px"> */}
        <TitleContainer>
          <Cap>農</Cap>
          <Big>作物の生産</Big>
        </TitleContainer>
        {/* </Fade> */}
        {/* <Fade right duration={1500} distance="50px"> */}
        <Small>サツマイモを中心とした</Small>
        <Small>露地栽培作物を生産します</Small>
        {/* </Fade> */}
        {/* <Fade right duration={1500} distance="50px"> */}
        <ImgContainer>
          <Img
            src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226188.jpg?alt=media&token=e6e328f8-8ab2-4e65-be9e-bed113689548"
            alt="activity"
          ></Img>
        </ImgContainer>
        {/* </Fade> */}
      </Container>

      <Container>
        {/* <Fade right duration={1500} distance="50px"> */}
        <TitleContainer>
          <Cap>生</Cap>
          <Big>産物の販売</Big>
        </TitleContainer>
        {/* </Fade> */}
        {/* <Fade right duration={1500} distance="50px"> */}
        <Small>生産した農作物を</Small>
        <Small>ECサイト等を通じて、一般販売します</Small>
        {/* </Fade> */}
        {/* <Fade right duration={1500} distance="50px"> */}
        <ImgContainer>
          <Img
            src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226182.jpg?alt=media&token=b787c6a9-377d-4748-ab8e-ebba40509953"
            alt="activity"
          ></Img>
        </ImgContainer>
        {/* </Fade> */}
      </Container>
      <Container>
        {/* <Fade right duration={1500} distance="50px"> */}
        <TitleContainer>
          <Cap>情</Cap>
          <Big>報発信</Big>
        </TitleContainer>
        {/* </Fade> */}
        {/* <Fade right duration={1500} distance="50px"> */}
        <Small>農作物栽培に関するブログを作成し、</Small>
        <Small>定期的に発信します</Small>
        {/* </Fade> */}
        {/* <Fade right duration={1500} distance="50px"> */}
        <ImgContainer>
          <Img
            src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226180.jpg?alt=media&token=6e97386b-9c3c-45c2-9440-6fcdbd9f469d"
            alt="activity"
          ></Img>
        </ImgContainer>
        {/* </Fade> */}
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
  color: #800080;
  font-size: 30px;
  font-weight: bold;
  font-family: "Times New Roman", "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3", "HGS明朝E",
    "ＭＳ Ｐ明朝", "MS PMincho", serif;
`

const Big = styled.span`
  text-align: left;
  margin: 0;
  color: #02102e;
  font-size: 20px;
  font-weight: bold;
  font-family: "Times New Roman", "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3", "HGS明朝E",
    "ＭＳ Ｐ明朝", "MS PMincho", serif;
`

const Small = styled.p`
  text-align: left;
  margin: 0 auto;
  color: #02102e;
  font-size: 14pt;
  // font-weight: bold;
  font-family: "Times New Roman", "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3", "HGS明朝E",
    "ＭＳ Ｐ明朝", "MS PMincho", serif;
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
