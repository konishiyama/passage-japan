// import Link from "next/link"
import { useRouter } from "next/router"
import React, { useContext } from "react"
import styled from "styled-components"
import { FirebaseContext } from "./Firebase"

const NavItemHome = styled.a`
  color: #222;
  font-size: 1rem;
  font-weight: bold;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  padding: 20px 0;
  z-index: 6;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1.5vw;
  transition: all 200ms ease-in;
  position: relative;
  text-decoration: underline;

  :after {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #800080;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    cursor: pointer;
    text-decoration: none;
    color: #800080;
    ::after {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 20px 0;
    font-size: 0.7rem;
    z-index: 6;
  }

  @media (min-width: 1024px) {
    padding: 20px 0;
    font-size: 0.8rem;
    z-index: 6;
  }
`
const NavItem = styled.a`
  color: #222;
  font-size: 1rem;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  padding: 20px 0;
  z-index: 6;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1.5vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #800080;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    cursor: pointer;
    text-decoration: none;
    color: #800080;
    ::after {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 20px 0;
    font-size: 0.7rem;
    z-index: 6;
  }

  @media (min-width: 1024px) {
    padding: 20px 0;
    font-size: 0.8rem;
    z-index: 6;
  }
`

const Logout = styled.span`
  text-decoration: none;
  color: #222;
  padding: 20px 0;
  font-size: 1rem;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  z-index: 6;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1.5vw;
  transition: all 200ms ease-in;
  position: relative;
  cursor: pointer;

  :after {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #800080;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #800080;
    ::after {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 20px 0;
    font-size: 0.7rem;
    z-index: 6;
  }

  @media (min-width: 1024px) {
    padding: 20px 0;
    font-size: 0.8rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  const router = useRouter()

  const { firebase, user } = useContext(FirebaseContext)

  function handleLogOutClick() {
    firebase.logout().then(() => router.push("/login"))
  }

  return (
    <>
      <a href="/">
        <NavItemHome>HOME</NavItemHome>
      </a>
      <a href="/about">
        <NavItem>農園について</NavItem>
      </a>
      <a href="/products">
        <NavItem>商品情報</NavItem>
      </a>
      <a href="/blog">
        <NavItem>ブログ</NavItem>
      </a>
      {!user && (
        <a href="/login">
          <NavItem>ログイン</NavItem>
        </a>
      )}
      {/* {!!user && !!user.admin && (
        <a href="/postarticle">
          <NavItem>記事投稿</NavItem>
        </a>
      )} */}
      {/* {!!user && (
        <a href="/member">
          <NavItem>会員掲示板</NavItem>
        </a>
      )} */}
      {!!user && <Logout onClick={handleLogOutClick}>ログアウト</Logout>}
    </>
  )
}

export default NavbarLinks
