import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import Markdown from 'markdown-to-jsx';
import { BackgroundImageContainer, Button, Filler, FlexContainer, MainContainer, Title } from './styles';
import { GraphcmsShelf } from '../models/graphcms/assets';
import { Wave } from './styles';
import { Link } from 'gatsby';
import { ThemeContext } from '../contexts/theme';
import { Palette } from '../models';

interface ShelfFrameProps {
  reverse: boolean;
}

interface ShelfPreviewProps {
  shelf: GraphcmsShelf;
  index: number;
}

const ShelfPreview: FC<ShelfPreviewProps> = ({ shelf, index }) => {
  const { palette } = useContext(ThemeContext);
  const currentPalette: Palette = shelf.palette || palette;

  const styles = {
    ShelfFrame: styled.div<ShelfFrameProps>`
      background-color: ${currentPalette.headerBackgroundColor.css};
      position: relative;
      top: 8em;
      border-radius: 2em;
      margin: 16em 0.5em 0;
      padding: 2em;
      max-width: 30em;
      z-index: 2;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      transform-origin: ${(props): string => (props.reverse ? 'left' : 'right')} center;
      transform: perspective(1200px) rotateY(0);
      &:hover {
        -webkit-box-shadow: ${(props): string => (props.reverse ? '' : '-')}20px 0px 20px 10px rgba(0, 0, 0, 0.1);
        box-shadow: ${(props): string => (props.reverse ? '' : '-')}20px 0px 20px 10px rgba(0, 0, 0, 0.1);
        transform: perspective(1200px) rotateY(${(props): string => (props.reverse ? '-' : '')}10deg);
      }
    `,
    Separator: styled.div`
      position: absolute;
      left: 0;
      right: 0;
      bottom: -24em;
      transform: scale(1, 0.35);
      z-index: 1;
    `,
    Text: styled.div`
      color: ${currentPalette.headerTextColor.css};
      text-align: justify;
      margin: 1em 0;
    `,
  };

  return (
    <BackgroundImageContainer
      backgroundImage={shelf.backgroundImage}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
    >
      <MainContainer>
        <FlexContainer reverse={index % 2 === 0}>
          <styles.ShelfFrame reverse={index % 2 === 0}>
            <Title level={3} color={currentPalette.headerTextColor.css}>
              {shelf.name}
            </Title>
            <styles.Text>
              <Markdown>{shelf.description}</Markdown>
            </styles.Text>
            <Link to={`/shelf/${shelf.slug}`}>
              <Button palette={currentPalette}>Découvrir</Button>
            </Link>
          </styles.ShelfFrame>
        </FlexContainer>
      </MainContainer>
      <styles.Separator>

        <Filler color={currentPalette.headerBackgroundColor.css} height="8em" />

      </styles.Separator>
    </BackgroundImageContainer>
  );
};

export default ShelfPreview;
