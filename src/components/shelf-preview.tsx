import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import Markdown from 'markdown-to-jsx';
import { BackgroundImageContainer, Button, Filler, FlexContainer, MainContainer, Title } from './styles';
import { GraphcmsShelf } from '../models/graphcms/assets';
import { Link } from 'gatsby';
import { ThemeContext } from '../contexts/theme';
import { Palette } from '../models';
import Separator from '../components/separator';

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
    /* position: relative;*/
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

      <Separator downWavePath={shelf.wavePath} upWavePath="M0,160L16,176C32,192,64,224,96,202.7C128,181,160,107,192,101.3C224,96,256,160,288,176C320,192,352,160,384,170.7C416,181,448,235,480,213.3C512,192,544,96,576,64C608,32,640,64,672,90.7C704,117,736,139,768,128C800,117,832,75,864,74.7C896,75,928,117,960,165.3C992,213,1024,267,1056,277.3C1088,288,1120,256,1152,240C1184,224,1216,224,1248,197.3C1280,171,1312,117,1344,117.3C1376,117,1408,171,1424,197.3L1440,224L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z" backgroundColor={currentPalette.headerBackgroundColor.css} />
    </BackgroundImageContainer >
  );
};

export default ShelfPreview;
