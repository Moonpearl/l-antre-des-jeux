import React, { FC, useContext, useState } from 'react';
import styled from '@emotion/styled';
import { FaHome, FaQuestionCircle, FaStore, FaShoppingCart } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { GraphcmsShelf } from '../models/graphcms/assets';
import { GraphcmsCollection } from '../models/graphcms';
import { Palette, ThemeContext } from '../contexts/theme';
import css, { SerializedStyles } from '@emotion/css';

const Basket = styled.button`
  font-size: 2em;
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 1em;
`;

// ANCHOR Interfaces
interface NavItemInterface {
  Icon?: IconType;
  action: string | NavItemInterface[];
  caption?: string;
}

interface WithTransparentProps {
  transparent: boolean;
}

interface WithPaletteProps {
  palette: Palette;
}

interface NavItemProps {
  item: NavItemInterface;
}

// SECTION Sub component
const NavFrame = styled.div<WithTransparentProps & WithPaletteProps>`
  ${({ transparent, palette }): SerializedStyles =>
    transparent
      ? css``
      : css`
          background-color: ${palette.headerBackgroundColor.css};
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        `}

  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

const NavItem: FC<NavItemProps> = ({ item }) => {
  const { palette } = useContext(ThemeContext);

  // ANCHOR Styles
  const styles = {
    LinkContainer: styled.div`
      padding: 0 0.5rem;
      position: relative;
      display: flex;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: ${palette.headerHighlightColor.css};

        & > .dropdown {
          visibility: visible;
          opacity: 1;
        }
      }
    `,
    IconContainer: styled.div`
      font-size: 1.75em;
    `,
    LinkCaption: styled.span`
      padding-left: 0.5rem;

      @media (max-width: 639px) {
        display: none;
      }
    `,
    Dropdown: styled.div`
      min-width: 10rem;
      position: absolute;
      visibility: hidden;
      opacity: 0;
      top: 100%;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    `,
  };

  // ANCHOR Template
  const jsx = (
    <styles.LinkContainer>
      {item.Icon && (
        <styles.IconContainer>
          <item.Icon />
        </styles.IconContainer>
      )}
      {item.caption && <styles.LinkCaption>{item.caption}</styles.LinkCaption>}
      {typeof item.action !== 'string' && (
        <styles.Dropdown className="dropdown">
          <NavFrame transparent={false} palette={palette}>
            <ul>
              {item.action.map((subitem, index) => (
                <li key={index}>
                  <NavItem item={subitem} />
                </li>
              ))}
            </ul>
          </NavFrame>
        </styles.Dropdown>
      )}
    </styles.LinkContainer>
  );

  switch (typeof item.action) {
    case 'string':
      return <Link to={item.action}>{jsx}</Link>;

    default:
      return jsx;
  }
};
// !SECTION

// SECTION Main Component
const Header: FC = () => {
  const { palette } = useContext(ThemeContext);

  // ANCHOR Manage scroll position
  const [transparent, setTransparent] = useState(true);

  useScrollPosition(({ currPos }) => setTransparent(currPos.y === 0));

  // ANCHOR Define menu items
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
    { Icon: FaQuestionCircle, action: '/about' },
  ];

  // ANCHOR Styles
  const styles = {
    HeaderContainer: styled.header`
      background-color: ${palette.headerBackgroundColor.css};
      position: 'relative';
    `,
    Navbar: styled.div`
      color: ${palette.headerTextColor.css};
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      position: fixed;
      top: 0;
      z-index: 10;
    `,
    NavList: styled.ul`
      display: flex;
      flex-direction: row;
    `,
  };

  // ANCHOR Template
  return (
    <styles.HeaderContainer>
      <styles.Navbar>
        <NavFrame transparent={transparent} palette={palette}>
          <styles.NavList>
            {items.map((item, index) => (
              <li key={index}>
                <NavItem item={item} />
              </li>
            ))}
          </styles.NavList>

          <Basket className="header__checkout snipcart-checkout">
            <FaShoppingCart />
          </Basket>
        </NavFrame>
      </styles.Navbar>
    </styles.HeaderContainer>
  );
};
// !SECTION

// ANCHOR Exports
export default Header;
