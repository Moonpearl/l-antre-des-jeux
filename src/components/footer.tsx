import styled from '@emotion/styled';
import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { colors } from '../styles/variables';

const FooterStyled = styled.footer`
  position: relative;
  text-align: center;
  padding: 4em 0;
  background-color: ${colors.ui.dark};
  color: ${colors.ui.light};
`;

const SocialIcons = styled.div`
  font-size: 2em;
  display: flex;
  justify-content: center;

  & > * {
    margin: 0 0.25em;
  }
`;

interface SocialIconProps {
  url: string;
  slug?: string;
  Icon: IconType;
}

const SocialIcon: FC<SocialIconProps> = ({ url, slug, Icon }) => {
  if (!slug) {
    return null;
  }

  return (
    <a href={`${url}/${slug}`} target="_blank" rel="noreferrer">
      <Icon />
    </a>
  );
};

const Footer: FC = () => {
  const { graphCmsGlobalContent: globalContent } = useStaticQuery(graphql`
    query FooterQuery {
      graphCmsGlobalContent {
        socialFacebook
        socialTwitter
        socialInstagram
      }
    }
  `);

  return (
    <FooterStyled>
      <SocialIcons>
        <SocialIcon url={`https://www.facebook.com`} slug={globalContent?.socialFacebook} Icon={FaFacebook} />
        <SocialIcon url={`https://twitter.com`} slug={globalContent?.socialTwitter} Icon={FaTwitter} />
        <SocialIcon url={`https://www.instagram.com`} slug={globalContent?.socialInstagram} Icon={FaInstagram} />
      </SocialIcons>
    </FooterStyled>
  );
};

export default Footer;
