import * as React from 'react';
import styled from '@emotion/styled';
import { Filler } from './styles';

const headerColor = '#666';

const HeaderContainer = styled.header`
  position: 'relative';
`;

const Navbar = styled.ul`
  background-color: ${headerColor};
  width: 100%;
  height: 3em;
  position: fixed;
  top: 0;
  z-index: 10;
`;

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = () => (
  <HeaderContainer>
    <Navbar />
    <Filler color={headerColor} height="3em" marginTop="3em" />
  </HeaderContainer>
);

export default Header;
