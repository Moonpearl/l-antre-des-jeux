import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Filler } from './styles';
import { colors } from '../styles/variables';
import { FaHome, FaQuestionCircle, FaStore } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Link } from 'gatsby';

interface Hyperlink {
  Icon: IconType;
  path: string;
  caption?: string;
}

const links: Hyperlink[] = [
  { Icon: FaHome, path: '/', caption: 'Accueil' },
  { Icon: FaStore, path: '/' },
  { Icon: FaQuestionCircle, path: '/' },
];

const HeaderContainer = styled.header`
  position: 'relative';
`;

const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  background-color: ${colors.ui.dark};
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  color: white;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const IconContainer = styled.div`
  font-size: 1.75em;
  padding: 0 0.5rem;
`;

const LinkContainer = styled.div`
  display: flex;
  &:hover {
    background-color: ${colors.ui.normal};
  }
  & > * {
  }
`;

const LinkCaption = styled.span`
  padding-right: 0.5rem;
`;

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = () => (
  <HeaderContainer>
    <Navbar>
      {links.map(link => (
        <li key={link.path}>
          <Link to={link.path}>
            <LinkContainer>
              <IconContainer>
                <link.Icon />
              </IconContainer>
              {link.caption && <LinkCaption>{link.caption}</LinkCaption>}
            </LinkContainer>
          </Link>
        </li>
      ))}
    </Navbar>
    <Filler color={colors.ui.dark} height="3em" marginTop="3em" />
  </HeaderContainer>
);

export default Header;
