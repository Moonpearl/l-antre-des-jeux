import React, { FC } from 'react';
import styled from '@emotion/styled';
import { FaFacebook, FaTwitter, FaInstagramSquare, FaPhoneSquareAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import { GiShop } from 'react-icons/gi';
import IndexLayout from '../layouts/index';
import MainContainer from '../components/styles/main-container';
import BgImg from '../images/bg.jpg';
import MemberImg from '../images/mistery-character.png';

const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: palegoldenrod;
  justify-content: center;
`;

const BgImage = styled.img`
  position: absolute;
  opacity: 0.2;

  background-size: contain;
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
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  margin-bottom: 2em;
`;

/* MEMBER */

const ImgBubble = styled.div`
  /*  background-color: pink;*/
  justify-content: center;
`;

const ImgMember = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  border: 1em solid green;
  margin: 2em auto;
`;

const Bubble = styled.div`
  position: relative;
  bottom: 32em;
  right: 6em;
  margin-bottom: 10em;
  @media only screen and (max-width: 600px) {
    bottom: 15em;
    left: 0;
    right: 0;
  }
`;

const TextFrame = styled.div`
  position: absolute;
  background-color: teal;
  border-radius: 2em;
  margin: 16em 0.5em 0;
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
  flex-direction: row;
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

const Map = styled.div`
  background-color: palegoldenrod;

  margin: 1em;
`;

const ShopPage = () => (
  <IndexLayout>
    <ContainerAbout>
      <BgImage src={BgImg} alt="Image de fond" />
      <MainContainer>
        <AboutTitle>La boutique</AboutTitle>
        <UnderlayCenter>
          <Diaporama src={BgImg} alt="Placeholder" />

          <StaffTitle>Le staff !</StaffTitle>
          <ImgBubble>
            <ImgMember src={MemberImg} alt="Image du gérant" />
            <Bubble>
              <TextFrame>
                <Triangle />
                <NameMember>Mr. le gérant</NameMember>
                <DescriptionMember>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus velit voluptatibus porro quo fugit quam, ea
                  consequatur, asperiores vitae doloribus magnam temporibus repellat ut eveniet reprehenderit eaque? Voluptates, at.
                </DescriptionMember>
              </TextFrame>
            </Bubble>
          </ImgBubble>

          <section className="ShopContact">
            <ContactTitle>Comment nous trouver ?</ContactTitle>
            <ContactContainer>
              <ContactText>
                {' '}
                <Icon>
                  <GiShop />
                </Icon>
                15 rue de la Belette, 68900 Ville
              </ContactText>
              <ContactText>
                {' '}
                <Icon>
                  <FaPhoneSquareAlt />
                </Icon>
                antredesjeux@gmail.com
              </ContactText>
              <ContactText>
                <Icon>
                  {' '}
                  <FaEnvelopeOpenText />
                </Icon>
                +33 61520754565
              </ContactText>
            </ContactContainer>

            <Map />

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
          </section>
        </UnderlayCenter>
      </MainContainer>
    </ContainerAbout>
  </IndexLayout>
);

export default ShopPage;
