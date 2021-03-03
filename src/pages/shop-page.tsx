import React, { FC } from 'react';
import styled from '@emotion/styled';
import { FaFacebook, FaTwitter, FaInstagramSquare, FaPhoneSquareAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import { GiShop } from 'react-icons/gi';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
`;

const TitleShop = styled.h1`
  color: gold;
  background-color: teal;
  border-radius: 1em;
  padding: 1em;
  margin: 1em;
  margin-left: auto;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-style: italic;
  margin-bottom: 4.5em;
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
`;

const Diaporama = styled.div`
  background-color: teal;
  margin: 0 auto;
  height: 25em;
  width: 50em;
  border-radius: 1em;
  bottom: 5em;
  position: relative;
`;

const UnderlayCenter = styled.div`
  position: relative;
  background-color: #545454;
  border-radius: 1em;
  width: 55em;
  margin-top: 5em;
  margin: 1em auto;

  display: flex;
  flex-direction: column;
`;

const StaffTitle = styled.h2`
  position: relative;
  margin-left: auto;
  left: 2em;
  top: 2.5em;
  color: teal;
  font-size: 3em;
  font-style: italic;
  font-weight: bold;
  font-family: 'Oswald', sans-serif;
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
`;

/* MEMBER */

const ImgMember = styled.div`
  background-color: paleturquoise;
  margin: 0 auto;
  height: 10em;
  width: 10em;
  border-radius: 10em;
  border: 1em solid green;
`;

const FrameText = styled.div`
  position: relative;
  bottom: 11em;
  right: 5em;
  padding: 2em;
  background-color: teal;
  width: 20em;
  text-align: center;
  justify-content: center;

  display: flex;
  flex-wrap: wrap;
`;

const Triangle = styled.div`
  display: inline-block;
  border-top: 1em solid transparent;
  border-bottom: 2em solid transparent;
  border-left: 4em solid teal;
  position: absolute;
  left: 22em;
  top: 6em;
`;

const NameMember = styled.div`
  color: gold;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const DescriptionMember = styled.div`
  color: gold;
  text-align: justify;
`;

/* ---------------------- */

const ContactTitle = styled.h2`
  position: relative;
  color: teal;
  font-size: 3em;
  font-style: italic;
  font-weight: bold;
  font-family: 'Oswald', sans-serif;
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const ContactContainer = styled.div`
  /*background-color: blueviolet;*/
  display: flex;
  flex-direction: row;
`;

const ContactText = styled.p`
  color: gold;
  text-align: center;
  font-size: 1.2em;
  font-style: italic;
  margin: 0 auto;
`;

const IconsContact = styled.div`
  display: flex;
  position: relative;
  font-size: 2em;
  justify-content: center;
  color: grey;
`;

const Icon = styled.div`
  margin: 1em;
`;

const Map = styled.div`
  background-color: palegoldenrod;
  height: 20em;
  margin: 1em;
`;

const ShopPage = () => (
  <Container>
    <TitleShop>La boutique</TitleShop>
    <UnderlayCenter>
      <section className="ShopImg">
        <Diaporama />
      </section>

      <StaffTitle>Le staff !</StaffTitle>
      <section className="MembersList">
        <div className="MemberContainer">
          <ImgMember />
          <FrameText>
            <Triangle />
            <NameMember>Mr. le gérant</NameMember>
            <DescriptionMember>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus velit voluptatibus porro quo fugit quam, ea
              consequatur, asperiores vitae doloribus magnam temporibus repellat ut eveniet reprehenderit eaque? Voluptates, at.
            </DescriptionMember>
          </FrameText>
        </div>
      </section>

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
  </Container>
);

export default ShopPage;
