import React, { FC } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import IndexLayout from '../layouts';
import styled from '@emotion/styled';
import { GraphcmsGlobalContent } from '../models/graphcms/assets';

interface NotFoundPageQuery {
  graphCmsGlobalContent: GraphcmsGlobalContent;
}

const NotFoundPage: FC = () => {
  const { graphCmsGlobalContent } = useStaticQuery<NotFoundPageQuery>(graphql`
    query NotFoundPage {
      graphCmsGlobalContent {
        defaultPalette {
          backgroundColor {
            css
          }
          frameBackgroundColor {
            css
          }
          frameTextColor {
            css
          }
          headerBackgroundColor {
            css
          }
          headerHighlightColor {
            css
          }
          headerTextColor {
            css
          }
          textColor {
            css
          }
          titleColor {
            css
          }
          titleHighlightColor {
            css
          }
        }
      }
    }
  `);

  const palette = graphCmsGlobalContent?.defaultPalette;

  const styles = {
    Bg: styled.div`
      background-color: ${palette?.headerBackgroundColor.css};
    `,
    TextContainer: styled.div`
      justify-content: center;
      vertical-align: center;
      margin: 10em 0;
      color: ${palette?.headerTextColor.css};
    `,
    Title: styled.h1`
      text-align: center;
      font-weight: bold;
      font-size: 6em;
      color: ${palette?.titleColor.css};
      margin-bottom: 0.2em;
      font-family: 'Oswald', sans-serif;
    `,
    Text: styled.p`
      text-align: center;
      letter-spacing: 0.2em;
      font-size: 1em;
      font-weight: bold;
      line-height: 2em;
      text-transform: uppercase;
    `,
    LinkStyled: styled.p`
      color: ${palette?.headerTextColor.css};
      font-style: oblique;
      letter-spacing: 0.2em;
      margin-top: 2em;
      border: 1px solid;
      padding: 1em;
      transition: background-color 0.3s ease;
      border-radius: 2em;
      max-width: 23em;
      margin: 0 auto;
      margin-top: 1em;
      font-size: 1em;

      &:hover {
        background-color: ${palette?.headerHighlightColor.css};
        color: ${palette?.headerTextColor.css};
      }
    `,
  };

  return (
    <IndexLayout seoData={{ pageUri: '', title: 'page non trouvée' }} palette={palette}>
      <styles.Bg>
        <styles.TextContainer>
          <styles.Title>Oups !</styles.Title>
          <styles.Text>Cette page n&apos;existe pas.</styles.Text>
          <styles.Text>Veuillez relancer votre dé et&#8230;</styles.Text>
          <styles.Text>
            <styles.LinkStyled>
              <Link to="/">Revenir à la case départ</Link>
            </styles.LinkStyled>
          </styles.Text>
        </styles.TextContainer>
      </styles.Bg>
    </IndexLayout>
  );
};

export default NotFoundPage;
