import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles/variables';
import { FaHome, FaQuestionCircle, FaStore } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { GraphcmsShelf } from '../models/graphcms/assets';
import { GraphcmsCollection } from '../models/graphcms';

interface NavItemInterface {
  Icon?: IconType;
  action: string | NavItemInterface[];
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

interface NavFrameProps {
  transparent: boolean;
}

const NavFrame = styled.div<NavFrameProps>`
  ${({ transparent }): string =>
    transparent
      ? ''
      : `background-color: ${colors.ui.dark};
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`};
  transition: background-color 0.3s ease;
`;

const Navbar = styled.div`
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  color: white;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const IconContainer = styled.div`
  font-size: 1.75em;
`;

const LinkContainer = styled.div`
  padding: 0 0.5rem;
  position: relative;
  display: flex;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${colors.ui.normal};

    & > .dropdown {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const LinkCaption = styled.span`
  padding-left: 0.5rem;

  @media (max-width: 639px) {
    display: none;
  }
`;

const Dropdown = styled.div`
  min-width: 10rem;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  top: 100%;
  transition: opacity 0.3s ease;
`;

interface NavItemProps {
  item: NavItemInterface;
}

const NavItem: FC<NavItemProps> = ({ item }) => {
  const jsx = (
    <LinkContainer>
      {item.Icon && (
        <IconContainer>
          <item.Icon />
        </IconContainer>
      )}
      {item.caption && <LinkCaption>{item.caption}</LinkCaption>}
      {typeof item.action !== 'string' && (
        <Dropdown className="dropdown">
          <NavFrame transparent={false}>
            <ul>
              {item.action.map((subitem, index) => (
                <li key={index}>
                  <NavItem item={subitem} />
                </li>
              ))}
            </ul>
          </NavFrame>
        </Dropdown>
      )}
    </LinkContainer>
  );

  switch (typeof item.action) {
    case 'string':
      return <Link to={item.action}>{jsx}</Link>;

    default:
      return jsx;
  }
};

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = () => {
  const [transparent, setTransparent] = useState(true);

  useScrollPosition(({ currPos }) => setTransparent(currPos.y === 0));

  const { allGraphCmsShelf: shelves } = useStaticQuery<{ allGraphCmsShelf: GraphcmsCollection<GraphcmsShelf> }>(graphql`
    query HeaderQuery {
      allGraphCmsShelf {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `);

  const items: NavItemInterface[] = [
    { Icon: FaHome, action: '/', caption: 'Accueil' },
    { Icon: FaStore, action: shelves.edges.map(({ node }) => ({ action: `/shelf/${node.slug}`, caption: node.name })) },
    { Icon: FaQuestionCircle, action: '/' },
  ];

  console.log(shelves);

  return (
    <HeaderContainer>
      <Navbar>
        <NavFrame transparent={transparent}>
          <NavList>
            {items.map((item, index) => (
              <li key={index}>
                <NavItem item={item} />
              </li>
            ))}
          </NavList>
        </NavFrame>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
