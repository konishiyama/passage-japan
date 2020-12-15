import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const About = () => {
  return (
    <>
      <Container>
        <Fade duration={2000}>
          <Title>ふくむらさきの山口農園です。</Title>
          <Para1>
            自然豊かな栃木県日光市にて、ふくむらさきの栽培を中心とした有機農業を営んでいます。
            家族経営のこじんまりとした農園ですが、その分、一つ一つの作物を緻密に研究し、大切に育て、少しでも安全で美味しい野菜をお客様に直接お届けしたいと考えております。
          </Para1>
        </Fade>
        <Fade duration={2000}>
          <ImgContainer>
            <Img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34308262.jpg?alt=media&token=93f4afce-ebc0-40fe-a52e-ecf5fe77dde3"
              alt="activity"
            ></Img>
          </ImgContainer>
        </Fade>
        {/* <Fade duration={2000}>
          <ImgContainer>
            <Img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226180.jpg?alt=media&token=6e97386b-9c3c-45c2-9440-6fcdbd9f469d"
              alt="activity"
            ></Img>
          </ImgContainer>
        </Fade> */}
      </Container>
    </>
  )
}

const Container = styled.div`
  margin: 0 auto 4rem;
  overflow: hidden;
`

const Title = styled.p`
  text-align: left;
  margin: 0;
  color: #222;
  font-size: 22px;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  margin-bottom: 1.5rem;
`

const Para1 = styled.p`
  text-align: left;
  margin: 0 auto;
  color: #222;
  font-size: 15px;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
`

const ImgContainer = styled.div`
  overflow: hidden;
  margin-top: 2rem;
`

const Img = styled.img`
  width: 100%;
  height: 13rem;
  object-fit: cover;
  margin: 0 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    height: 20rem;
  }
`

export default About
