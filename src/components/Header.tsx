import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { heights, dimensions, colors, fonts } from '../styles/variables';
import Container from './Container';

import Home from '../images/home.png';
import Shop from '../images/shop.png';
import Info from '../images/ring.png';
import Shelves from '../images/dice.png';
import ArrowDown from '../images/arrowdown.png';

const Logo = styled.img`
  width: 3em;
  height: 3em;
  background-color: green;
  margin-right: 2em;
  border-radius: 1em;
`;

/* ICONS HEADER */

const Icons = styled.div`
  margin: 2em;
`;

const IconHome = styled.img`
  width: 3em;
  height: 3em;
  margin-right: 1em;
  cursor: pointer;
`;

const IconShop = styled.img`
  width: 3em;
  height: 3em;
  margin-right: 1em;
  cursor: pointer;
`;

const IconInfo = styled.img`
  margin-right: 1em;
  width: 2em;
  height: 2.8em;
  cursor: pointer;
`;

const IconShelves = styled.img`
  width: 3em;
  height: 3em;
  margin-right: 1em;
  cursor: pointer;
`;

const IconArrow = styled.img`
  width: 1em;
  height: 1em;
  margin-bottom: 12px;
  cursor: pointer;
`;

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.white};
  color: ${colors.teal};
  width: 50em;
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const HomepageLink = styled(Link)`
  color: ${colors.teal};
  font-size: 1.5rem;
  font-weight: 600;
  /* font-family: 'Satisfy', cursive; */
  font-family: 'Patrick Hand SC', cursive;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <Logo />
      <HomepageLink to="/">{title}</HomepageLink>

      <Icons>
        <IconHome src={Home} />
        <IconShop src={Shop} />
        <IconInfo src={Info} />
        <IconShelves src={Shelves} />
        <IconArrow src={ArrowDown} />
      </Icons>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
