import React, { FC } from 'react';
import styled from '@emotion/styled';
import { FaPhoneSquareAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import { GiShop } from 'react-icons/gi';
import IndexLayout from '../layouts/index';
import MainContainer from '../components/styles/main-container';
import { graphql } from 'gatsby';
import { PagePropsWithData } from '../models';
import Markdown from 'markdown-to-jsx';
import { Filler, BackgroundImageContainer, BackgroundColorContainer, Title } from '../components/styles';
import DownWaves from '../components/styles/waves/down';

const UnderlayCenter = styled.div`
  position: relative;
  background-color: #fff;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  text-align: center;
  margin: 1em;
  color: #004965;
  margin-bottom: 2em;
  text-align: justify;
`;

const ImgBubble = styled.div`
  justify-content: center;
  position: relative;
  @media (min-width: 600px) {
    margin-bottom: -15em;
  }
`;

const ImgMember = styled.img`
  display: block;
  width: 12em;
  height: 12em;
  position: relative;
  border-radius: 50%;
  border: 1em solid #fff2df;
  margin: 4em auto;
`;

const Bubble = styled.div`
  position: relative;
  bottom: 20em;
  right: 20em;
  @media (max-width: 600px) {
    bottom: 0;
    right: 0;
    margin: 1em auto;
  }
`;

const TextFrame = styled.div`
  position: relative;
  background-color: #fff2df;
  border-radius: 2em;
  padding: 2em;
  max-width: 20em;
  margin: 0 auto;
`;

const Triangle = styled.div`
  display: inline-block;
  border-top: 1em solid transparent;
  border-bottom: 2em solid transparent;
  border-left: 4em solid #fff2df;
  position: absolute;
  left: 20em;
  top: 9em;
  @media (max-width: 600px) {
    display: none;
  }
`;

const NameMember = styled.div`
  color: #c61c41;
  position: relative;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.05em;
  font-weight: bold;
  text-transform: uppercase;
  font-style: italic;
  font-size: 2em;
  margin-bottom: 0.2em;
`;

const DescriptionMember = styled.div`
  color: #004965;
  text-align: justify;
`;

const SectionTitle = styled.h2`
  position: relative;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.05em;
  color: #bddcef;
  font-weight: bold;
  text-transform: uppercase;
  font-style: italic;
  font-size: 2em;
  padding: 0.5em;
  background-color: #0e4d63;
  margin-bottom: 1em;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ContactText = styled.p`
  color: #0e4d63;
  text-align: center;
  font-size: 1.2em;
  font-style: italic;
  margin: 1em 2em;
`;

const Icon = styled.div`
  color: #c82446;
  font-size: 2em;
  margin: 1em;
`;

const Separator = styled.div`
  position: absolute;
  z-index: 1;
  transform: scale(1, 0.5);
  transform-origin: top center;
`;

const DownWave = DownWaves[1];

const AboutPage: FC<PagePropsWithData> = ({ data }) => {
  const { graphCmsGlobalContent: globalContent } = data;

  return (
    <IndexLayout>
      <BackgroundImageContainer
        backgroundImage={globalContent?.shopBackgroundImage || { url: '' }}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="fixed"
      >
        <Filler color={globalContent?.shopBackgroundColor.css} height="6em" />
        <BackgroundColorContainer color={globalContent?.shopBackgroundColor.css}>
          <MainContainer>
            <Title level={1} color={globalContent?.shopTitleColor.css}>
              La boutique
            </Title>
          </MainContainer>
        </BackgroundColorContainer>
        <Filler color={globalContent?.shopBackgroundColor.css} height="1em" />
        <Separator>
          <DownWave color={globalContent?.shopBackgroundColor.css || '#000'} />
        </Separator>
        <MainContainer>
          <UnderlayCenter>
            <Filler height="8em" />
            <Description>
              <Markdown>{globalContent?.shopDescription as string}</Markdown>
            </Description>

            <SectionTitle>Le staff !</SectionTitle>

            {globalContent?.employees?.map(employee => (
              <ImgBubble key={employee.slug}>
                <ImgMember src={employee.picture.url} alt="Image du gérant" />
                <Bubble>
                  <TextFrame>
                    <Triangle />
                    <NameMember>{employee.name}</NameMember>
                    <DescriptionMember>
                      <Markdown>{employee.bio}</Markdown>
                    </DescriptionMember>
                  </TextFrame>
                </Bubble>
              </ImgBubble>
            ))}

            <SectionTitle>Comment nous trouver ?</SectionTitle>
            {
              <ContactContainer>
                <ContactText>
                  {' '}
                  <Icon>
                    <GiShop />
                  </Icon>
                  {globalContent?.shopAddress}
                </ContactText>
                <ContactText>
                  {' '}
                  <Icon>
                    <FaPhoneSquareAlt />
                  </Icon>
                  {globalContent?.shopPhone}
                </ContactText>
                <ContactText>
                  <Icon>
                    {' '}
                    <FaEnvelopeOpenText />
                  </Icon>
                  {globalContent?.shopEmail}
                </ContactText>
              </ContactContainer>
            }
          </UnderlayCenter>
        </MainContainer>
      </BackgroundImageContainer>
    </IndexLayout>
  );
};

export const query = graphql`
  query AboutPageQuery {
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
      shopBackgroundColor {
        css
      }
      shopTitleColor {
        css
      }
      shopBackgroundImage {
        url
      }
    }
  }
`;

export default AboutPage;
