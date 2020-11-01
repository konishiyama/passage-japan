import React from "react"
import styled from "styled-components"
import { PageTitle } from "../../components/common"

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
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226187.jpg?alt=media&token=ba0969ec-8fcd-4e21-b83d-49af92cd320b"
              alt="coverImg"
            ></img>
          </Pic>
          <br></br>
          <br></br>
          <Index>農園について</Index>
          <P>
            自然豊かな栃木県日光市にて紫芋を中心とした有機農業を営んでいます。
            家族経営のこじんまりとした農園ですが、その分、一つ一つの作物を緻密に研究し、大切に育て、少しでも安全で美味しい野菜をお客様に直接お届けしたいと考えています。
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
          <Index>目標について</Index>
          <P>
            当農園の目標は、安全・安心・美味しい野菜をお客様に提供し、Made In
            Japan・Japanブランドの野菜の素晴らしさ・価値を再認識していただくことです。
            グローバル化の進展で様々な国・地域産の野菜が食卓を飾る中だからこそ、当農園の野菜を通じて、一人でも多くのお客様が日本産の野菜の素晴らしさを感じていただければ幸いです。
          </P>
          <br></br>
          <br></br>
          <br></br>
          <Pic>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fprofile_pic_height_optimized.jpg?alt=media&token=57bae787-a0e7-4735-a436-347e5f6123b4"
              alt="coverImg"
            ></img>
          </Pic>
          <br></br>
          <br></br>
          <Index>代表メッセージ</Index>
          <P>調整中</P>
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
`

const P = styled.p`
  font-size: 14px;
  line-height: 1.5;
`

export default Products
