import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GiHouse, GiRollingDices, GiShop, GiRingingBell, GiPlainArrow } from 'react-icons/gi';
import { FaChevronDown } from 'react-icons/fa';

import { heights, dimensions, colors, fonts } from '../styles/variables';
import Container from './Container';

/*https://emotion.sh/docs/media-queries*/

/*import { jsx } from '@emotion/react';
import facepaint from 'facepaint';

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

<div
css={mq({
  color: ['green', 'gray', 'hotpink'],
})}
>
Some text.
</div>*/

const Logo = styled.div`
  background-color: white;
  height: 2em;
  width: 2em;
  border-radius: 0.2em;
  margin: 1em;
`;

const Icons = styled.div`
  cursor: pointer;
  margin-left: 1em;
  display: flex;
  flex-direction: row;
  vertical-align: center;
`;

const IconLi = styled.li`
  margin: 0.2em;
  font-size: 2em;
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
        <IconLi>
          <GiHouse />
        </IconLi>
        <IconLi>
          <GiShop />
        </IconLi>
        <IconLi>
          <GiRingingBell />
        </IconLi>
        <IconLi>
          <GiRollingDices />
        </IconLi>
        <IconLi>
          <FaChevronDown size="15" />
        </IconLi>
      </Icons>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
