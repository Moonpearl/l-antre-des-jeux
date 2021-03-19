import React, { FC } from 'react';
import styled from '@emotion/styled';
import { FaPhoneSquareAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import { GiShop } from 'react-icons/gi';
import IndexLayout from '../layouts/index';
import MainContainer from '../components/styles/main-container';
import { graphql } from 'gatsby';
import Markdown from 'markdown-to-jsx';
import { Filler, BackgroundImageContainer, BackgroundColorContainer, Title } from '../components/styles';
import DownWaves from '../components/styles/waves/down';
/*import { pages } from '../models/graphcms/assets/pages';*/
import { PagePropsWithData, SeoData } from '../models';

const DownWave = DownWaves[1];

// SECTION Main component
const AboutPage: FC<PagePropsWithData> = ({ data }) => {
  const { graphCmsGlobalContent: globalContent, graphCmsPage: page } = data;

  // ANCHOR Manage SEO Data
  const seoData: SeoData = {
    pageUri: '/about',
    title: page?.title || '',
    description: page?.description,
    openGraphImage: page?.openGraphImage?.url,
  };

  // ANCHOR Styles
  const styles = {
    UnderlayCenter: styled.div`
      position: relative;
      background-color: ${page?.palette.backgroundColor.css};
      margin: 0 auto;

      display: flex;
      flex-direction: column;
    `,
    Description: styled.p`
      text-align: center;
      margin: 1em;
      color: ${page?.palette.textColor.css};
      margin-bottom: 2em;
      text-align: justify;
    `,
    ImgBubble: styled.div`
      justify-content: center;
      position: relative;
      @media (min-width: 600px) {
        margin-bottom: -15em;
      }
    `,
    ImgMember: styled.img`
      display: block;
      width: 12em;
      height: 12em;
      position: relative;
      border-radius: 50%;
      border: 1em solid ${page?.palette.frameBackgroundColor.css};
      margin: 4em auto;
    `,
    Bubble: styled.div`
      position: relative;
      bottom: 20em;
      right: 20em;
      @media (max-width: 600px) {
        bottom: 0;
        right: 0;
        margin: 1em auto;
      }
    `,
    TextFrame: styled.div`
      position: relative;
      background-color: ${page?.palette.frameBackgroundColor.css};
      border-radius: 2em;
      padding: 2em;
      max-width: 20em;
      margin: 0 auto;
    `,
    Triangle: styled.div`
      display: inline-block;
      border-top: 1em solid transparent;
      border-bottom: 2em solid transparent;
      border-left: 4em solid ${page?.palette.frameBackgroundColor.css};
      position: absolute;
      left: 20em;
      top: 9em;
      @media (max-width: 600px) {
        display: none;
      }
    `,
    NameMember: styled.div`
      color: ${page?.palette.titleColor.css};
      position: relative;
      text-align: center;
      font-family: 'Oswald', sans-serif;
      letter-spacing: 0.05em;
      font-weight: bold;
      text-transform: uppercase;
      font-style: italic;
      font-size: 2em;
      margin-bottom: 0.2em;
    `,
    DescriptionMember: styled.div`
      color: ${page?.palette.textColor.css};
      text-align: justify;
    `,
    SectionTitle: styled.h2`
      position: relative;
      text-align: center;
      font-family: 'Oswald', sans-serif;
      letter-spacing: 0.05em;
      color: ${page?.palette.headerTextColor.css};
      font-weight: bold;
      text-transform: uppercase;
      font-style: italic;
      font-size: 2em;
      padding: 0.5em;
      background-color: ${page?.palette.headerBackgroundColor.css};
      margin-bottom: 1em;
    `,
    ContactContainer: styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `,
    ContactText: styled.p`
      color: ${page?.palette.headerBackgroundColor.css};
      text-align: center;
      font-size: 1.2em;
      font-style: italic;
      margin: 1em 2em;
    `,
    Icon: styled.div`
      color: ${page?.palette.titleColor.css};
      font-size: 2em;
      margin: 1em;
    `,
    Separator: styled.div`
      position: absolute;
      z-index: 1;
      transform: scale(1, 0.5);
      transform-origin: top center;
    `,
  };

  return (
    <IndexLayout seoData={seoData} palette={page?.palette}>
      <BackgroundImageContainer
        backgroundImage={globalContent?.shopBackgroundImage || { url: '' }}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="fixed"
      >
        <Filler color={page?.palette?.headerBackgroundColor.css} height="6em" />
        <BackgroundColorContainer color={page?.palette?.headerBackgroundColor.css}>
          <MainContainer>
            <Title level={1} color={page?.palette?.headerTextColor.css}>
              La boutique
            </Title>
          </MainContainer>
        </BackgroundColorContainer>
        <Filler color={page?.palette?.headerBackgroundColor.css} height="1em" />
        <styles.Separator>
          <DownWave color={page?.palette?.headerBackgroundColor.css || '#000'} />
        </styles.Separator>
        <MainContainer>
          <styles.UnderlayCenter>
            <Filler height="8em" />
            <styles.Description>
              <Markdown>{globalContent?.shopDescription as string}</Markdown>
            </styles.Description>

            <styles.SectionTitle>Le staff !</styles.SectionTitle>

            {globalContent?.employees?.map(employee => (
              <styles.ImgBubble key={employee.slug}>
                <styles.ImgMember src={employee.picture.url} alt="Image du gérant" />
                <styles.Bubble>
                  <styles.TextFrame>
                    <styles.Triangle />
                    <styles.NameMember>{employee.name}</styles.NameMember>
                    <styles.DescriptionMember>
                      <Markdown>{employee.bio}</Markdown>
                    </styles.DescriptionMember>
                  </styles.TextFrame>
                </styles.Bubble>
              </styles.ImgBubble>
            ))}

            <styles.SectionTitle>Comment nous trouver ?</styles.SectionTitle>
            {
              <styles.ContactContainer>
                <styles.ContactText>
                  {' '}
                  <styles.Icon>
                    <GiShop />
                  </styles.Icon>
                  {globalContent?.shopAddress}
                </styles.ContactText>
                <styles.ContactText>
                  {' '}
                  <styles.Icon>
                    <FaPhoneSquareAlt />
                  </styles.Icon>
                  {globalContent?.shopPhone}
                </styles.ContactText>
                <styles.ContactText>
                  <styles.Icon>
                    {' '}
                    <FaEnvelopeOpenText />
                  </styles.Icon>
                  {globalContent?.shopEmail}
                </styles.ContactText>
              </styles.ContactContainer>
            }
          </styles.UnderlayCenter>
        </MainContainer>
      </BackgroundImageContainer>
    </IndexLayout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    graphCmsGlobalContent {
      keywords
      siteName
    }
    graphCmsPage(slug: { eq: "about" }) {
      title
      description
      openGraphImage {
        url
      }
      palette {
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
    graphCmsGlobalContent {
      employees {
        slug
        bio
        name
        picture {
          url
        }
      }
      shopAddress
      shopDescription
      shopEmail
      shopLocation {
        latitude
        longitude
        remoteTypeName
      }
      shopPhone
      shopBackgroundImage {
        url
      }
      keywords
      siteName
    }
  }
`;

export default AboutPage;
