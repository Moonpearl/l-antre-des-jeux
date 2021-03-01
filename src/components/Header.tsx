import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GiHouse, GiRollingDices, GiShop, GiRingingBell } from 'react-icons/gi';
import { FaChevronDown } from 'react-icons/fa';

import { heights, dimensions, colors } from '../styles/variables';
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
  justify-content: space-between;
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
  font-family: 'Oswald', 'sans-serif';
  font-weight: bold;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => <div />;

export default Header;
