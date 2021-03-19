import React, { FC } from 'react';
import styled from '@emotion/styled';
import { FaPhoneSquareAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import { GiShop } from 'react-icons/gi';
import IndexLayout from '../layouts/index';
import MainContainer from '../components/styles/main-container';
import { graphql } from 'gatsby';
import Markdown from 'markdown-to-jsx';
import { Filler, BackgroundImageContainer, BackgroundColorContainer, Title } from '../components/styles';
import Wave from '../components/styles/wave';
import { PagePropsWithData, SeoData } from '../models';

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
          <Wave color={palette.headerBackgroundColor.css} path="M0,128L18.5,154.7C36.9,181,74,235,111,245.3C147.7,256,185,224,222,176C258.5,128,295,64,332,42.7C369.2,21,406,43,443,64C480,85,517,107,554,144C590.8,181,628,235,665,224C701.5,213,738,139,775,112C812.3,85,849,107,886,112C923.1,117,960,107,997,101.3C1033.8,96,1071,96,1108,96C1144.6,96,1182,96,1218,96C1255.4,96,1292,96,1329,106.7C1366.2,117,1403,139,1422,149.3L1440,160L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z" />
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
