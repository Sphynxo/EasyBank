import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "/images/logo.svg";
import BurgerIMG from "/images/icon-hamburger.svg";
import CloseMenu from "/images/icon-close.svg";

export default function Header() {
  const navList = ["Home", "About", "Contact", "Blog", "Careers"];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo" />
      <Burger
        src={menuOpen ? CloseMenu : BurgerIMG}
        alt="menu"
        onClick={toggleMenu}
      />
      <Blur className={menuOpen ? "open" : ""} />
      <Navigation className={menuOpen ? "open" : ""}>
        {navList.map((link, index) => (
          <NavLink key={index}>{link}</NavLink>
        ))}
      </Navigation>
      <RequestInvite>Request Invite</RequestInvite>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  padding: 2.2rem 2rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  @media only screen and (min-width: 64rem) {
    padding: 0 16.5rem;

  }
`;

const Logo = styled.img`
  width: 14rem;

`;

const Burger = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  @media only screen and (min-width: 64rem) {
    display: none;
  }
`;

const Navigation = styled.ul`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  background-color: #ffffff;
  width: 32rem;
  top: -999rem;
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  transition: top 0.5s ease-in-out;
  z-index: 100;

  &.open {
    top: 8rem;
  }

  @media only screen and (min-width: 64rem) {
    position: static;
    flex-direction: row;
    justify-content: space-between;
    transform: translate(0);
    padding: 0;
    margin-top: 2rem;
  }
`;

const NavLink = styled.li`
  font-size: 1.8rem;


  @media only screen and (min-width: 64rem) {
    font-size: 1.4rem;
    color: #9597a5;
    padding-bottom: 4.4rem;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #2d314d;
      cursor: pointer;
      box-shadow: inset 0 -0.4rem 0 0 #30C88F;
      transition: 0.3s ease-in-out;
    }
  }
`;

const Blur = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: linear-gradient(180deg, #2d314d 0%, rgba(45, 49, 77, 0) 100%);
  top: 6.8rem;
  left: 0;
  z-index: 50;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  @media only screen and (min-width: 64rem) {
    display: none;
  }
`;

const RequestInvite = styled.button`
  padding: 1.2rem 3.2rem;
  border: none;
  border-radius: 22px;
  background: linear-gradient(135deg, #33d35e 0%, #2ab6d9 99.58%);
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  display: none;

  @media only screen and (min-width: 64rem) {
    display: block;
    cursor: pointer;
    margin: 2rem 0;

    &:hover {
      background: linear-gradient(135deg, #a8e0b7 0%, #91d2e2 99.58%);
    }
  }
`;

