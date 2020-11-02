import React from "react"
import styled from "styled-components"
import { PageTitle } from "../components/common"

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
            padding: `0em 2rem 1.45rem`,
          }}
        >
          <br></br>
          <Pic>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226180.jpg?alt=media&token=6e97386b-9c3c-45c2-9440-6fcdbd9f469d"
              alt="coverImg"
            ></img>
          </Pic>
          <br></br>
          <br></br>
          <Index>ふくむらさき（おすすめ）</Index>
          <P>
            ２０１８年に開発され、２０１９年から市場に出回るようになったふくむらさき。焼き芋にすると、これまでの紫芋の概念を覆す、ねっとりとした食感で糖度は「べにはるか」並に高くなるのが特徴。
          </P>
          <P>
            【参照URL】
            https://www.naro.affrc.go.jp/publicity_report/press/files/KARC_press_2018_11_15a.pdf
          </P>
          <br></br>
          <br></br>
          <br></br>
          <Pic>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226180.jpg?alt=media&token=6e97386b-9c3c-45c2-9440-6fcdbd9f469d"
              alt="coverImg"
            ></img>
          </Pic>
          <br></br>
          <br></br>
          <Index>パープルスイートロード</Index>
          <P>
            糖度は低いがアントシアニンたっぷりで栄養価が高く、濃い紫が特徴なパープルスイートロード。
          </P>
          <br></br>
          <br></br>
          <br></br>
          <Pic>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226180.jpg?alt=media&token=6e97386b-9c3c-45c2-9440-6fcdbd9f469d"
              alt="coverImg"
            ></img>
          </Pic>
          <br></br>
          <br></br>
          <Index>べにはるか</Index>
          <P>
            国内・海外で大人気のべにはるか。焼き芋にすると、ねっとりとした食感とたまらない甘さが特徴。干し芋やプリン、スイートポテトへの利用も◎。
          </P>
          <br></br>
          <br></br>
          <br></br>
          <Pic>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226180.jpg?alt=media&token=6e97386b-9c3c-45c2-9440-6fcdbd9f469d"
              alt="coverImg"
            ></img>
          </Pic>
          <br></br>
          <br></br>
          <Index>シルクスイート</Index>
          <P>
            滑らかな舌触りでほんのり後口に残らない上品な甘さが特徴なシルクスイート。
          </P>
          <br></br>
          <br></br>
          <a
            style={{
              padding: `0 1.5rem 0`,
              textDecoration: `none`,
              width: `45%`,
              fontSize: `14px`,
              color: `#fff`,
              backgroundColor: `#800080`,
              display: `block`,
              textAlign: `center`,
              border: `solid 1px #800080`,
              padding: `0.5em`,
              lineHeight: `1.5`,
              margin: `1em auto 0`,
              hover: { color: `#800080`, backgroundColor: `#fff` },
            }}
            href="/contact"
          >
            ご注文はこちら
          </a>
          <br></br>
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
  font-weight: bold;
  line-height: 1.5;
  font-family: "Times New Roman", "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3", "HGS明朝E",
    "ＭＳ Ｐ明朝", "MS PMincho", serif;
`

const P = styled.p`
  font-size: 14px;
  line-height: 1.5;
`

export default Products
