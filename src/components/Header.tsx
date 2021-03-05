import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles/variables';
import { FaHome, FaQuestionCircle, FaStore } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Link } from 'gatsby';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

interface Hyperlink {
  Icon: IconType;
  path: string;
  caption?: string;
}

const links: Hyperlink[] = [
  { Icon: FaHome, path: '/', caption: 'Accueil' },
  { Icon: FaStore, path: '/' },
  { Icon: FaQuestionCircle, path: '/about' },
];

const HeaderContainer = styled.header`
  background-color: ${colors.ui.dark};
  position: 'relative';
`;

interface NavbarProps {
  transparent: boolean;
}

const Navbar = styled.ul<NavbarProps>`
  ${({ transparent }): string =>
    transparent
      ? ''
      : `background-color: ${colors.ui.dark};
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`};
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: row;
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
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${colors.ui.normal};
  }
`;

const LinkCaption = styled.span`
  padding-right: 0.5rem;

  @media (max-width: 639px) {
    display: none;
  }
`;

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = () => {
  const [transparent, setTransparent] = useState(true);

  useScrollPosition(({ currPos }) => setTransparent(currPos.y === 0));

  return (
    <HeaderContainer>
      <Navbar transparent={transparent}>
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
    </HeaderContainer>
  );
};

export default Header;
