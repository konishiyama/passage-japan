import Link from "next/link"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { LoginImage, ProfileImage } from "./common"
import { FirebaseContext } from "./Firebase"
import NavbarLinks from "./NavbarLinks"
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded"

const Toggle = styled.div`
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

const Navbox = styled.nav`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: ${props => (props.open ? "-1" : "11")};

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 64px;
    background-color: #fff;
    transition: all 0.4s;
    opacity: ${props => (props.open ? "0" : "100%")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 25px;
  height: 1.5px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 24px;
    height: 1.5px;
    // background-color: ${props => (props.open ? "#111" : "#fff")};
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-9px, 0px)" : "rotate(0deg)"};
    top: -8px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 8px;
  }
`

const LogIn = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  width: 64px;
  height: 64px;
  padding: 20px;
  cursor: pointer;
`

const Logo = styled.img`
  position: fixed;
  z-index: 10;
  top: 21px;
  right: 20px;
  height: 24px;
  object-fit: cover;
  cursor: pointer;
  margin: 0;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (min-width: 769px) {
    left: 1.5vw;
  }
`

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>{!!firebase && <NavbarLinks />}</Navbox>
      ) : (
        <Navbox open>{!!firebase && <NavbarLinks />}</Navbox>
      )}
      {!!firebase && (
        <a href="/">
          <Logo src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Flogo6.001.png?alt=media&token=31e40854-d873-4c8f-8cb0-aec4853c0651"></Logo>
        </a>
      )}
      {/* {!!user && !user.photoURL && (
        <LogIn>
          <Link href="/profile">
            <a
              style={{
                display: `flex`,
                alignItems: `center`,
              }}
            >
              <ProfileImage
                src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6"
                alt="profilepic"
              ></ProfileImage>
            </a>
          </Link>
        </LogIn>
      )}
      {!user && (
        <LogIn>
          <Link href="/login">
            <a
              style={{
                display: `flex`,
                alignItems: `center`,
              }}
            >
              <ExitToAppRoundedIcon
                style={{
                  color: `#02102e`,
                }}
              ></ExitToAppRoundedIcon>
            </a>
          </Link>
        </LogIn>
      )} */}
    </>
  )
}

export default Header
