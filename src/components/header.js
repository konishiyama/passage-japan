import Link from "next/link"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { LoginImage, ProfileImage } from "./common"
import { FirebaseContext } from "./Firebase"
import NavbarLinks from "./NavbarLinks"
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded"

const Navigation = styled.nav`
  height: 6vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 769px) {
    position: sticky;
    height: 2.5vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }

  @media (max-width: 1024px) {
    position: sticky;
    height: 6.5vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.nav`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: ${props => (props.open ? "-1" : "2")};

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    // top: 0;
    justify-content: flex-start;
    padding-top: 64px;
    background-color: #fff;
    transition: all 0.4s;
    opacity: ${props => (props.open ? "0" : "100%")};
  }
`

const Hamburger = styled.div`
  // background-color: ${props => (props.open ? "#111" : "#fff")};
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

const Header2 = () => {
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
      {/* {!!user && (
        <LogIn>
          <Link href="/profile">
            <a
              style={{
                display: `flex`,
                alignItems: `center`,
              }}
            >
              <ProfileImage src={user.photoURL} alt="profilepic"></ProfileImage>
            </a>
          </Link>
        </LogIn>
      )}
      {!!user && !user.photoURL && (
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

export default Header2
