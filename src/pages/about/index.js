import React from "react"
import styled from "styled-components"
import { PageTitle } from "../../components/common"
import Fade from "react-reveal/Fade"

const Farm = () => {
  return (
    <>
      <section>
        <PageTitle>
          <span>農園概要</span>
          <p>Profile</p>
        </PageTitle>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 650,
            padding: `2rem 2rem 0em`,
          }}
        >
          <Fade duration={2000}>
            <Index>農園について</Index>
          </Fade>
          <Fade duration={2000}>
            <Pic>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34226187.jpg?alt=media&token=ba0969ec-8fcd-4e21-b83d-49af92cd320b"
                alt="coverImg"
              ></img>
            </Pic>
          </Fade>
          <Fade duration={2000}>
            <P>
              自然豊かな栃木県日光市にてふくむらさきを中心とした有機農業を営んでいます。
              家族経営のこじんまりとした農園ですが、その分、一つ一つの作物を緻密に研究し、大切に育て、少しでも安全で美味しい野菜をお客様に直接お届けしたいと考えています。
            </P>
          </Fade>
          <Fade duration={2000}>
            <Index>目標について</Index>
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
            <P>
              当農園の目標は、安全・安心・美味しい野菜をお客様に提供し、Made In
              Japan・Japanブランドの野菜の素晴らしさ・価値を再認識していただくことです。
              グローバル化の進展で様々な国・地域産の野菜が食卓を飾る中だからこそ、当農園の野菜を通じて、一人でも多くのお客様が日本産の野菜の素晴らしさを感じていただければ幸いです。
            </P>
          </Fade>
          <Fade duration={2000}>
            <Index>代表メッセージ</Index>
          </Fade>
          <Fade duration={2000}>
            <Pic>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fpresident.jpg?alt=media&token=d6ae53e1-14ea-4430-8b2d-37be8bda81ea"
                alt="coverImg"
              ></img>
            </Pic>
          </Fade>
          <Fade duration={2000}>
            <P1>
              未来の子供たちの「食」を守りたい。
              そんな途方もない夢に憧れて農業を開始し、数年が経ちました。
              スマート農業等による機械化や効率化が叫ばれる時代に、自信を持って食卓に並べられるような素材を確実に届けられるよう、手摘みにこだわっております（実際は、手摘みでしか経験できない収穫時の感動を手放したくないだけなのかもしれません。笑）。
              人口減少やグローバル化の影響で野菜に求められる「質」は年々上がっているなかでも、変わらぬ価値を提供できるよう全力を努めて参りますので、よろしくお願いいたします。
            </P1>
            <P2>2020.1.1</P2>
            <P3>山口農園代表　山口 吉一</P3>
          </Fade>
        </div>
      </section>
    </>
  )
}

const Pic = styled.div`
  position: relative;
  margin-bottom: 1rem;
  margin-top: 1rem;
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
  color: #222;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  line-height: 1.5;
  margin: 0 auto 1rem;
  text-align: center;
`

const P = styled.p`
  font-size: 15px;
  color: #222;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  line-height: 1.5;
  margin-bottom: 4rem;
`

const P1 = styled.p`
  font-size: 15px;
  color: #222;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  line-height: 1.5;
  margin-bottom: 1rem;
`

const P2 = styled.p`
  font-size: 15px;
  color: #222;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 0;
`

const P3 = styled.p`
  font-size: 15px;
  color: #222;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  line-height: 1.5;
`

export default Farm
