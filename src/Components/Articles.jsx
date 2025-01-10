import React from "react";
import { Description, Title2 } from "../GlobalStyle";
import styled from "styled-components";
import articlesData from "../articles.json";

export default function Articles() {
  return (
    <ArticlesContainer>
      <Title2>Latest Articles</Title2>
      <ArticesContent>
        {articlesData.map((article, index) => (
          <Article key={index}>
            <ArticleImg src={article.image} />

            <ArticleTextContainer>
              <ArticleAuthor>{article.author}</ArticleAuthor>
              <ArticleHeading>{article.title}</ArticleHeading>
              <ArticleText>{article.text}</ArticleText>
            </ArticleTextContainer>
          </Article>
        ))}
      </ArticesContent>
    </ArticlesContainer>
  );
}

const ArticlesContainer = styled.div`
  padding: 8.8rem 2.4rem;
  text-align: center;

  @media only screen and (min-width: 64rem) {
    padding: 8rem 16.5rem;
    text-align: left;
  }
`;

const ArticesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 3.2rem;
  text-align: left;
  justify-content: space-between;

  @media only screen and (min-width: 64rem) {
    flex-direction: row;
    gap: 3rem;
  }
`;

const Article = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  max-width: 28rem;
  cursor: pointer;
  transition: color 0.3s ease-out;
  &:hover h4 {
    color: #30c88f;
    transition: color 0.1s ease-in;
  }
`;

const ArticleImg = styled.img`
  width: 100%;
  height: 20rem;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const ArticleTextContainer = styled.div`
  padding: 2.4rem 3.2rem;
`;

const ArticleAuthor = styled.span`
  font-size: 1rem;
  color: #9597a5;
  font-weight: 400;
`;

const ArticleHeading = styled.h4`
  font-size: 1.6rem;
  color: #2d314d;
  font-weight: 300;
  line-height: 20px;
  margin-top: 0.8rem;
`;

const ArticleText = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  color: #9597a5;
  line-height: 18px;
  margin-top: 0.8rem;
`;
