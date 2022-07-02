import React, { useContext, useState } from "react"
import styled from "styled-components"
// import { LoginImage, ProfileImage } from "./common"
import { FirebaseContext } from "./Firebase"
import NavbarLinks from "./NavbarLinks"
// import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded"

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

const Menubar = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  padding: 20px;
  cursor: pointer;
  // z-index: ${props => (props.open ? "-1" : "11")};

  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    hight: 64px;
    background-color: #fff;
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
  background-color: #6c6c6c;
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
    background-color: #6c6c6c;
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

// const LogIn = styled.div`
//   position: fixed;
//   z-index: 10;
//   top: 0;
//   right: 0;
//   width: 64px;
//   height: 64px;
//   padding: 20px;
//   cursor: pointer;
// `

const Logo = styled.img`
  position: fixed;
  z-index: 15;
  right: 5px;
  height: 65px;
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
  const { firebase } = useContext(FirebaseContext)

  return (
    <>
      <Menubar></Menubar>
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
          <Logo src="https://firebasestorage.googleapis.com/v0/b/passage-76e68.appspot.com/o/%E6%97%A5%E5%95%93LOGO_horizontal-01.png?alt=media&token=9c6bbbf3-0c20-4789-8a9a-9124980defc2"></Logo>
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
