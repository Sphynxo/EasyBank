import React from "react";
import WhiteLogo from "/images/logo-white.svg";
import styled from "styled-components";
import FacebookIcon from "/images/icon-facebook.svg";
import InstagramIcon from "/images/icon-instagram.svg";
import PinterestIcon from "/images/icon-pinterest.svg";
import TwitterIcon from "/images/icon-twitter.svg";
import YoutubeIcon from "/images/icon-youtube.svg";

export default function Footer() {
  const socialIcons = [
    FacebookIcon,
    YoutubeIcon,
    TwitterIcon,
    PinterestIcon,
    InstagramIcon,
  ];

  const navList = ["About Us", "Contact", "Blog", "Careers", "Support", "Privacy Policy"];

  return (
    <FooterContainer>
      <FooterIconsContainer>
        <FooterLogo src={WhiteLogo} />
        <FooterSocial>
          {socialIcons.map((icon, index) => (
            <FooterSocialIcon src={icon} key={index} />
          ))}
        </FooterSocial>
      </FooterIconsContainer>

      <FooterNav>
        {navList.map((link, index) => (
          <FooterNavLink key={index}>{link}</FooterNavLink>
        ))}
      </FooterNav>

      <FooterBtnContainer>
        <FooterBtn>Request Invite</FooterBtn>
        <FooterRights>© Easybank. All Rights Reserved</FooterRights>
      </FooterBtnContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #2d314d;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 64rem) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4.8rem 16.5rem;
  }
`;

const FooterIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  @media only screen and (min-width: 64rem) {
    align-items: start;
    justify-content: space-between;
  }
`;

const FooterLogo = styled.img``;

const FooterSocial = styled.div`
  display: flex;
  gap: 1.6rem;

  
`;

const FooterSocialIcon = styled.img``;

const FooterNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  margin-top: 3.2rem;

  @media only screen and (min-width: 64rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3.2rem;
      }
`;

const FooterNavLink = styled.li`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 400;

  @media only screen and (min-width: 64rem) {
    &:hover {
        color: #30C88F;
        cursor: pointer;
    }
  }
`;

const FooterBtnContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2.4rem;
margin-top: 3.2rem;
`;

const FooterBtn = styled.button`
  padding: 1.2rem 3.2rem;
  border: none;
  border-radius: 22px;
  background: linear-gradient(135deg, #33d35e 0%, #2ab6d9 99.58%);
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;

  &:hover {
      background: linear-gradient(135deg, #a8e0b7 0%, #91d2e2 99.58%);
    }
`;

const FooterRights = styled.span`
color: #ffffff;
opacity: 0.5;
font-size: 1.5rem;
font-weight: 400;
`;
