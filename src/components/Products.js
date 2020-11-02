import React from "react"
import styled from "styled-components"
import Link from "next/link"

const Products = () => {
  return (
    <>
      <Container>
        <UL>
          <LI>
            <BoxContainer1>
              <Link href="/products#fuku">
                <Img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226182.jpg?alt=media&token=b787c6a9-377d-4748-ab8e-ebba40509953"
                  alt="activity"
                ></Img>
              </Link>
              <TitleContainer>
                <Link href="/products#fuku">
                  <Title>ふくむらさき</Title>
                </Link>
              </TitleContainer>
            </BoxContainer1>
          </LI>
          <LI>
            <BoxContainer2>
              <Link href="/products#beni">
                <Img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226182.jpg?alt=media&token=b787c6a9-377d-4748-ab8e-ebba40509953"
                  alt="activity"
                ></Img>
              </Link>
              <TitleContainer>
                <Link href="/products#beni">
                  <Title>べにはるか</Title>
                </Link>
              </TitleContainer>
            </BoxContainer2>
          </LI>
        </UL>
      </Container>
    </>
  )
}

const Container = styled.div``

const UL = styled.ul`
  display: flex;
  -webkit-flex-wrap: wrap; /* Safari etc. */
  -ms-flex-wrap: wrap; /* IE10        */
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
`

const LI = styled.li`
  width: 50%;
`

const BoxContainer1 = styled.div`
  width: 100%;
  padding: 0 0.5rem 0 0;
`
const BoxContainer2 = styled.div`
  width: 100%;
  padding: 0 0 0 0.5rem;
`

const Img = styled.img`
  width: 100%;
  height: 9rem;
  object-fit: cover;
  margin: 0 0;
  &:hover {
    opacity: 55%;
  }
`
const TitleContainer = styled.div`
  // align-items: baseline;
  // margin-bottom: 1.5rem;
  padding-top: 0.3rem;
`
const Title = styled.p`
  text-align: left;
  margin: 0 auto;
  color: #444444;
  font-size: 14pt;
  font-weight: bold;
  font-family: "Times New Roman", "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3", "HGS明朝E",
    "ＭＳ Ｐ明朝", "MS PMincho", serif;
  &:hover {
    color: #800080;
    transition: all 0.2s ease-in;
  }
`

export default Products
