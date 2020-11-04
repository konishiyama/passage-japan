import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { PageTitle, SeeMore } from "../components/common"
import Fade from "react-reveal/Fade"

const Products = props => {
  return (
    <>
      <section>
        <PageTitle>
          <span>商品について</span>
          <p>Products</p>
        </PageTitle>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0em 2rem`,
          }}
        >
          <Price id="fuku">
            ※価格：1kg : 500円,　2kg : 1000円,　5kg : 2000円,　10kg :
            3500円（税別/全商品同一）
          </Price>
          <Fade duration={2000}>
            <Pic>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ffukumurasaki2.jpg?alt=media&token=0b238408-8fa4-4219-9779-c208c3485e9f"
                alt="coverImg"
              ></img>
            </Pic>
          </Fade>
          <Fade duration={2000}>
            <Index>ふくむらさき（おすすめ）</Index>
            <P1>
              ２０１８年に開発され、２０１９年から市場に出回るようになったふくむらさき。焼き芋にすると、これまでの紫芋の概念を覆す、ねっとりとした食感で糖度は「べにはるか」並に高くなるのが特徴。
            </P1>
            <P id="beni">
              【参照URL】
              https://www.naro.affrc.go.jp/publicity_report/press/files/KARC_press_2018_11_15a.pdf
            </P>
          </Fade>
          <Fade duration={2000}>
            <Pic>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fbeniharuka2.jpg?alt=media&token=6010891a-a638-4eae-ba20-6e526b94ea9f"
                alt="coverImg"
              ></img>
            </Pic>
          </Fade>
          <Fade duration={2000}>
            <Index>べにはるか</Index>
            <P id="purple">
              国内・海外で大人気のべにはるか。焼き芋にすると、ねっとりとした食感とたまらない甘さが特徴。干し芋やプリン、スイートポテトへの利用も◎。
            </P>
          </Fade>
          <Fade duration={2000}></Fade>
          <Pic>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226180.jpg?alt=media&token=6e97386b-9c3c-45c2-9440-6fcdbd9f469d"
              alt="coverImg"
            ></img>
          </Pic>
          <Fade duration={2000}>
            <Index>パープルスイートロード</Index>
            <P id="silk">
              糖度は低いがアントシアニンたっぷりで栄養価が高く、濃い紫が特徴なパープルスイートロード。
            </P>
          </Fade>
          <Fade duration={2000}>
            <Pic>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226180.jpg?alt=media&token=6e97386b-9c3c-45c2-9440-6fcdbd9f469d"
                alt="coverImg"
              ></img>
            </Pic>
          </Fade>
          <Fade duration={2000}>
            <Index>シルクスイート</Index>
            <P>
              滑らかな舌触りでほんのり後口に残らない上品な甘さが特徴なシルクスイート。
            </P>
          </Fade>
          <Fade bottom duration={2000}>
            <Link href="/contact">
              <SeeMore
                style={{
                  width: `40%`,
                }}
              >
                ご注文はこちら
              </SeeMore>
            </Link>
          </Fade>
        </div>
        <br></br>
      </section>
    </>
  )
}

const Pic = styled.div`
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
  display: inline-block;

  img {
    width: 100%;
    margin: 0;
    height: 12rem;
    object-fit: cover;
    display: block;
  }
`

const Index = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #222;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
`

const Price = styled.p`
  font-size: 14px;
  // font-weight: bold;
  line-height: 1.5;
  color: #222;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  margin: 3rem 0 2rem;
`

const P = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #222;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  margin-bottom: 4rem;
`

const P1 = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #222;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
`

export default Products
