import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'modern-normalize';
import '../styles/normalize';

import Header from '../components/Header';
import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';

const Footer = styled.footer`
  z-index: 0;
  position: relative;
  text-align: center;
  font-style: italic;
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 5px;
  margin: 2em;
  color: #989898;
  font-family: 'Indie Flower', cursive;
`;

export default Footer;
