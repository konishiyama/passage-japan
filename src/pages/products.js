import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { PageTitle, SeeMore3 } from "../components/common"
import Fade from "react-reveal/Fade"

const Products = () => {
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
            maxWidth: 650,
            padding: `0em 2rem`,
          }}
        >
          <Price id="fuku">
            ※価格：1kg : 1000円,　2kg : 1800円,　5kg : 4000円,　10kg :
            7000円（税込/全商品同一／送料別）
          </Price>
          <Fade duration={2000}>
            <Pic>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ffukumurasaki_nama.jpg?alt=media&token=19f7e7e7-f1b3-4470-8c79-d221dbfafa15"
                alt="ふくむらさき"
              ></img>
            </Pic>
          </Fade>
          <Fade duration={2000}>
            <Index>ふくむらさき（おすすめ）</Index>
            <P1>
              ２０１８年に開発され、２０１９年から市場に出回るようになったふくむらさき。焼き芋にすると、これまでのふくむらさきの概念を覆す、ねっとりとした食感で糖度は「べにはるか」並に高くなるのが特徴。
            </P1>
            <P2>
              ※白い斑点はヤラピンという、整腸を促す作用のある良質の物質であり、健康に害はございません。
            </P2>
            <P id="beni">
              【参照URL】
              <a
                href="https://www.naro.affrc.go.jp/publicity_report/press/files/KARC_press_2018_11_15a.pdf"
                style={{
                  textDecoration: "none",
                }}
                target="/blank"
              >
                https://www.naro.affrc.go.jp/publicity_report/press/files/KARC_press_2018_11_15a.pdf
              </a>
            </P>
          </Fade>
          <Fade duration={2000}>
            <Pic>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fbeniharuka_nama.jpg?alt=media&token=e862813b-3a05-43af-aead-713a41300556"
                alt="べにはるか"
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
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fpurplesweet.jpg?alt=media&token=1170dbf8-0b54-4a66-9c1a-9292350d66d2"
              alt="パープルスイートロード"
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
                src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fsilksweet.jpg?alt=media&token=e9fe43a7-7f68-43bb-a5dc-7495f6f67a9e"
                alt="シルクスイート"
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
              <SeeMore3>ご注文はこちら</SeeMore3>
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
    @media (min-width: 768px) {
      height: 20rem;
    }
  }
`

const Index = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #222;
`

const Price = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #222;

  margin: 3rem 0 2rem;
`

const P = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #222;

  margin-bottom: 4rem;
`

const P1 = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #222;
`

const P2 = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: #222;
`

export default Products
