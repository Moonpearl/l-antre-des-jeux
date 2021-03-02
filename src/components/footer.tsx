import styled from '@emotion/styled';
import React, { FC } from 'react';

const FooterStyled = styled.footer`
  z-index: 0;
  position: relative;
  text-align: center;
  font-style: italic;
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 5px;
  padding: 2em;
  background-color: #555455;
  color: #989898;
  font-family: 'Ubuntu Condensed', sans-serif;
`;

const Footer: FC = () => <FooterStyled>Copyright 2021 - L&apos;Antre des jeux</FooterStyled>;

export default Footer;
