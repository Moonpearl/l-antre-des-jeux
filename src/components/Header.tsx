import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FcHome, FcShop, FcInfo } from 'react-icons/fc';
import { GiRollingDices } from 'react-icons/gi';
import { FaChevronDown } from 'react-icons/fa';

import { heights, dimensions, colors, fonts } from '../styles/variables';
import Container from './Container';

const Logo = styled.img`
  width: 3em;
  height: 3em;
  background-color: green;
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
        <FcHome size="40" />
        <FcShop size="40" />
        <FcInfo size="40" />
        <GiRollingDices size="40" />
        <FaChevronDown size="10" />
      </Icons>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
