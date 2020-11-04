import React from "react"
import styled from "styled-components"
import Link from "next/link"

const Products = () => {
  return (
    <>
      <Container>
        <UL>
          <Link href="/products#fuku">
            <LI>
              <BoxContainer1>
                <Img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ffukumurasaki2.jpg?alt=media&token=0b238408-8fa4-4219-9779-c208c3485e9f"
                  alt="activity"
                ></Img>

                <TitleContainer>
                  <Title>ふくむらさき</Title>
                </TitleContainer>
              </BoxContainer1>
            </LI>
          </Link>
          <Link href="/products#beni">
            <LI>
              <BoxContainer2>
                <Img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fbeniharuka2.jpg?alt=media&token=6010891a-a638-4eae-ba20-6e526b94ea9f"
                  alt="activity"
                ></Img>

                <TitleContainer>
                  <Title>べにはるか</Title>
                </TitleContainer>
              </BoxContainer2>
            </LI>
          </Link>
          <Link href="/products#purple">
            <LI>
              <BoxContainer1>
                <Img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226182.jpg?alt=media&token=b787c6a9-377d-4748-ab8e-ebba40509953"
                  alt="activity"
                ></Img>

                <TitleContainer>
                  <Title>パープルスイートロード</Title>
                </TitleContainer>
              </BoxContainer1>
            </LI>
          </Link>
          <Link href="/products#silk">
            <LI>
              <BoxContainer2>
                <Img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226182.jpg?alt=media&token=b787c6a9-377d-4748-ab8e-ebba40509953"
                  alt="activity"
                ></Img>
                <TitleContainer>
                  <Title>シルクスイート</Title>
                </TitleContainer>
              </BoxContainer2>
            </LI>
          </Link>
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
  margin-bottom: 2rem;
  &:hover {
    cursor: pointer;
    img {
      opacity: 55%;
      transition: all 0.2s ease-in;
    }
    p {
      color: #800080;
      transition: all 0.2s ease-in;
    }
  }
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
    cursor: pointer;
    opacity: 55%;
  }
`
const TitleContainer = styled.div`
  padding-top: 0.3rem;
`
const Title = styled.p`
  text-align: left;
  margin: 0 auto;
  color: #222;
  font-size: 15px;
  // font-weight: bold;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  &:hover {
    color: #800080;
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
`

export default Products
