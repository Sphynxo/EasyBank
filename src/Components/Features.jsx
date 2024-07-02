import styled from "styled-components";
import React from "react";
import { Description } from "../GlobalStyle";
import featuresData from "../features.json";
import { Title2 } from "../GlobalStyle";

export default function Features() {
  return (
    <FeaturesContainer>
      <FeaturesText>
        <Title2>Why choose Easybank?</Title2>
        <Description>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </Description>
      </FeaturesText>
      <FeaturesContent>
        {featuresData.map((feature, index) => (
          <Feature key={index}>
            <FeatureIcon src={feature.icon} />
            <FeatureTitle>{feature.title}</FeatureTitle>
            <Description>{feature.description}</Description>
          </Feature>
        ))}
      </FeaturesContent>
    </FeaturesContainer>
  );
}

const FeaturesContainer = styled.div`
  padding: 6.4rem 2.4rem;
  background-color: #f4f5f7;

  @media only screen and (min-width: 64rem) {
    padding: 9.6rem 16.5rem;
  }
`;

const FeaturesText = styled.div`
  text-align: center;

  @media only screen and (min-width: 64rem) {
    text-align: left;
    width: 63rem;
  }
`;

const FeaturesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.6rem;
  gap: 5.6rem;

  @media only screen and (min-width: 64rem) {
    flex-direction: row;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (min-width: 64rem) {
    align-items: start;
    text-align: left;
  }
`;

const FeatureIcon = styled.img``;

const FeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  color: #2d314d;
  letter-spacing: -0.357px;
  margin-top: 2.4rem;
`;
