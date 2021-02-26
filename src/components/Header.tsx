import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GiHouse, GiRollingDices, GiShop, GiRingingBell, GiPlainArrow } from 'react-icons/gi';
import { FaChevronDown } from 'react-icons/fa';

import { heights, dimensions, colors, fonts } from '../styles/variables';
import Container from './Container';

const Logo = styled.img`
  width: 3em;
  height: 3em;
  background-color: white;
  margin-right: 2em;
  border-radius: 1em;
`;

/* ICONS HEADER */

const Icons = styled.div`
  cursor: pointer;
  margin-left: 1em;
  display: flex;
  flex-direction: row;
  vertical-align: center;
`;

const StyledHeader = styled.header`
  height: ${heights.header}px;
  background-color: grey;
  color: ${colors.white};
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Oswald', 'sans-serif';

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
        <GiHouse size="40" />
        <GiShop size="40" />
        <GiRingingBell size="40" />
        <GiRollingDices size="40" />
        <FaChevronDown size="10" />
      </Icons>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
