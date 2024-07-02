import React from "react";
import styled from "styled-components";
import MockupImage from "/images/image-mockups.png";
import { Description } from "../GlobalStyle";

export default function Hero() {
  return (
    <HeroContainer>
      <ImageContainer>
        <Mockup src={MockupImage} />
      </ImageContainer>

      <TextDiv>
        <Title>Next generation digital banking</Title>
        <Description>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </Description>
        <RequestInvite>Request Invite</RequestInvite>
      </TextDiv>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  width: 100%;
  background-image: url("/images/bg-intro-mobile.svg");
  background-position-y: -25.6rem;
  background-position-x: -16.8rem;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 2.4rem 9.6rem 2.4rem;

  @media only screen and (min-width: 64rem) {
    background-image: url("/images/bg-intro-desktop.svg");
    background-position-x: 48rem;
    background-position-y: -40rem;

    display: flex;
    flex-direction: row-reverse;

    padding: 0 0 0 16.5rem;
    gap: 20rem;
  }
`;

const ImageContainer = styled.div`
  @media only screen and (min-width: 64rem) {
    width: 150%;
  }
`;

const Mockup = styled.img`
  width: 100%;
  margin-top: -6rem;

  @media only screen and (min-width: 64rem) {
    margin-left: 10rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  color: #2d314d;

  @media only screen and (min-width: 64rem) {
    font-size: 5.6rem;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 4rem;

  @media only screen and (min-width: 64rem) {
    text-align: left;
    align-items: start;
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
  margin-top: 3.2rem;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #a8e0b7 0%, #91d2e2 99.58%);
  }
`;
