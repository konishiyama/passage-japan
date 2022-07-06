// import Link from "next/link"
import { useRouter } from "next/router"
import React, { useContext } from "react"
import styled from "styled-components"
import { FirebaseContext } from "./Firebase"

const NavItemHome = styled.a`
  color: #222;
  font-size: 1rem;
  font-weight: bold;
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
    background: #39afca;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    cursor: pointer;
    text-decoration: none;
    color: #39afca;
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
    background: #39afca;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    cursor: pointer;
    text-decoration: none;
    color: #39afca;
    font-weight: bold;
    ::after {
      width: 100%;
      font-weight: bold;
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
    background: #39afca;
    height: 1px;
    transition: all 0.4s ease-in;
    font-weight: bold;
  }

  :hover {
    color: #39afca;
    font-weight: bold;
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
      <a href="/jobs">
        <NavItem>熱門職缺</NavItem>
      </a>
      <a href="/articles">
        <NavItem>精選專欄</NavItem>
      </a>
      {/* <a href="/blog">
        <NavItem>ブログ</NavItem>
      </a> */}
      {!user && (
        <a href="/login">
          <NavItem>登入</NavItem>
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
      {!!user && <Logout onClick={handleLogOutClick}>LOGOUT</Logout>}
    </>
  )
}

export default NavbarLinks
