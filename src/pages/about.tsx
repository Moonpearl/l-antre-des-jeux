import React, { FC } from 'react';
import styled from '@emotion/styled';
import { FaFacebook, FaTwitter, FaInstagramSquare, FaPhoneSquareAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import { GiShop } from 'react-icons/gi';
import IndexLayout from '../layouts/index';
import MainContainer from '../components/styles/main-container';
import BgImg from '../images/bg.jpg';
import MemberImg from '../images/mistery-character.png';
import { graphql } from 'gatsby';
import { PagePropsWithData } from '../models';
import Markdown from 'markdown-to-jsx';

const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: palegoldenrod;
  justify-content: center;
  align-items: center;
`;

const BgImage = styled.img`
  position: absolute;
  opacity: 0.2;
`;

const AboutTitle = styled.h1`
  position: relative;

  color: gold;
  background-color: teal;
  border-radius: 1em;
  padding: 0.5em;

  margin: 0.5em auto;

  text-align: center;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.05em;

  font-weight: bold;
  text-transform: uppercase;
  font-style: italic;
  font-size: 2em;
`;

/* A voir + tard*/
const Diaporama = styled.img`
  position: relative;
  margin-bottom: 1em;
`;

const UnderlayCenter = styled.div`
  position: relative;
  background-color: #545454;
  border-radius: 1em;
  margin: 1em auto;

  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  text-align: center;
  margin: 1em;
  color: gold;
  margin-bottom: 2em;
  text-align: justify;
`;

const StaffTitle = styled.h2`
  position: relative;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.05em;
  color: teal;
  font-weight: bold;
  text-transform: uppercase;
  font-style: italic;
  font-size: 2em;
  padding: 0.5em;
  background-color: gold;
  margin-bottom: 2em;
`;

/* MEMBER */

const ImgBubble = styled.div`
  justify-content: center;
  position: relative;
  @media (min-width: 600px) {
    margin-bottom: -15em;
  }
`;

const ImgMember = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  border: 1em solid teal;
  margin: 2em auto;
`;

const Bubble = styled.div`
  position: relative;
  bottom: 20em;
  right: -1em;
  /* right: 6em; */
  @media (max-width: 600px) {
    bottom: 0;
    right: 0;
    margin: 1em auto;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  }
`;

const TextFrame = styled.div`
  position: relative;
  background-color: teal;
  border-radius: 2em;
  padding: 2em;
  max-width: 20em;
`;

const Triangle = styled.div`
  display: inline-block;
  border-top: 1em solid transparent;
  border-bottom: 2em solid transparent;
  border-left: 4em solid teal;
  position: absolute;
  left: 20em;
  top: 9em;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const NameMember = styled.div`
  color: gold;
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
  color: gold;
  text-align: justify;
`;

/* ---------------------- */

const ContactTitle = styled.h2`
  position: relative;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.05em;
  color: teal;
  font-weight: bold;
  text-transform: uppercase;
  font-style: italic;
  font-size: 2em;
  padding: 0.5em;
  background-color: gold;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactText = styled.p`
  color: gold;
  text-align: center;
  font-size: 1.2em;
  font-style: italic;
  margin: 1em 2em;
`;

const IconsContact = styled.div`
  display: flex;
  position: relative;

  justify-content: center;

  color: grey;
`;

const Icon = styled.div`
  color: grey;
  font-size: 2em;
  margin: 1em;
`;

const AboutPage: FC<PagePropsWithData> = ({ data }) => {
  const { graphCmsGlobalContent: globalContent } = data;

  return (
    <IndexLayout>
      <ContainerAbout>
        <BgImage src={BgImg} alt="Image de fond" />
        <MainContainer>
          <AboutTitle>La boutique</AboutTitle>
          <UnderlayCenter>
            <Description>
              <Markdown>{globalContent?.shopDescription as string}</Markdown>
            </Description>

            <StaffTitle>Le staff !</StaffTitle>

            {globalContent?.employees.map(employee => (
              <ImgBubble key={employee.slug}>
                <ImgMember src={MemberImg} alt="Image du gérant" />
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

            <ContactTitle>Comment nous trouver ?</ContactTitle>
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

            <IconsContact>
              <Icon>
                <FaFacebook />
              </Icon>
              <Icon>
                <FaTwitter />
              </Icon>
              <Icon>
                <FaInstagramSquare />
              </Icon>
            </IconsContact>
          </UnderlayCenter>
        </MainContainer>
      </ContainerAbout>
    </IndexLayout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    graphCmsGlobalContent {
      employees {
        bio
        name
        slug
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
      socialFacebook
      socialInstagram
      socialTwitter
    }
  }
`;

export default AboutPage;
