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
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ffukumurasaki_nama.jpg?alt=media&token=19f7e7e7-f1b3-4470-8c79-d221dbfafa15"
                  alt="ふくむらさき"
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
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fbeniharuka_nama.jpg?alt=media&token=e862813b-3a05-43af-aead-713a41300556https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fbeniharuka_nama.jpg?alt=media&token=e862813b-3a05-43af-aead-713a41300556"
                  alt="べにはるか"
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
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fpurplesweet.jpg?alt=media&token=1170dbf8-0b54-4a66-9c1a-9292350d66d2"
                  alt="パープルスイートロード"
                ></Img>

                <TitleContainer>
                  <Title2>パープルスイートロード</Title2>
                </TitleContainer>
              </BoxContainer1>
            </LI>
          </Link>
          <Link href="/products#silk">
            <LI>
              <BoxContainer2>
                <Img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fsilksweet.jpg?alt=media&token=e9fe43a7-7f68-43bb-a5dc-7495f6f67a9e"
                  alt="シルクスイート"
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

const Title2 = styled.p`
  text-align: left;
  margin: 0 auto;
  color: #222;
  font-size: 14px;
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
