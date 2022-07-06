import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import YouTubeIcon from "@material-ui/icons/YouTube"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useContext } from "react"
import styled from "styled-components"
import { FirebaseContext } from "./Firebase"

const Container = styled.div`
  background-color: #fff;
  padding: 1rem 0 1rem;
  a {
    color: #787c7b;
    text-decoration: none;
    &:hover {
      color: #787c7b;
      transition: all 0.4s ease-in;
    }
  }
`

const Home = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
`

const LogIn = styled.div`
  width: 50%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  a {
    color: #787c7b;
    text-decoration: none;
    &:hover {
      color: #787c7b;
      transition: all 0.4s ease-in;
    }
  }
`

const LogOut = styled.span`
  width: 50%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  color: #787c7b;
  &:hover {
    color: #787c7b;
  }
`

const ImgContainer = styled.div`
  height: 18px;
  width: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  alignitems: center;
`

const SNSLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const Paragraph1 = styled.div`
  width: 60%;
  margin: 10px auto 1.5rem;
  display: flex;
  color: #222;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  font-size: 15px;
`

const CopyRight = styled.p`
  font-size: 12px;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  color: #808080;
  text-align: center;
  margin: 40px auto;
`

const Footer = () => {
  const { firebase, user } = useContext(FirebaseContext)

  const router = useRouter()

  function handleLogOutClick() {
    firebase.logout().then(() => router.push("/login"))
  }

  return (
    <>
      <Container>
        {/* <Paragraph1>
          <Home>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </Home>
          {!user && (
            <LogIn>
              <Link href="/login">
                <a>ログイン</a>
              </Link>
            </LogIn>
          )}
          {!!user && <LogOut onClick={handleLogOutClick}>ログアウト</LogOut>}
        </Paragraph1> */}
        {/* {!!firebase && (
          <ImgContainer>
            <SNSLink href="" target="_blank">
              <FacebookIcon alt="Facebook" style={{}}></FacebookIcon>
            </SNSLink>
            <SNSLink>
              <YouTubeIcon alt="Youtube"></YouTubeIcon>
            </SNSLink>
            <SNSLink>
              <TwitterIcon alt="Twitter"></TwitterIcon>
            </SNSLink>
          </ImgContainer>
        )} */}
        <CopyRight>
          Copyright © 2022 Passage Japan All Rights Reserved.
        </CopyRight>
      </Container>
    </>
  )
}

export default Footer
