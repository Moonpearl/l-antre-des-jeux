import React, { FC } from 'react';
import styled from '@emotion/styled';
import Markdown from 'markdown-to-jsx';
import { BackgroundImageContainer, Button, Filler, FlexContainer, MainContainer, Title } from './styles';
import { GraphcmsShelf } from '../models/graphcms/assets';
import UpWaves from './styles/waves/up';
import DownWaves from './styles/waves/down';
import { Link } from 'gatsby';

interface ShelfFrameProps {
  backgroundColor?: string;
  reverse: boolean;
}

const ShelfFrame = styled.div<ShelfFrameProps>`
  background-color: ${(props): string => props.backgroundColor as string};
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
`;

const Separator = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -24em;
  transform: scale(1, 0.35);
  z-index: 1;
`;

const Text = styled.div`
  color: white;
  text-align: justify;
  margin: 1em 0;
`;

interface ShelfPreviewProps {
  shelf: GraphcmsShelf;
  index: number;
}

const ShelfPreview: FC<ShelfPreviewProps> = ({ shelf, index }) => {

  const UpWave = UpWaves[(index + 1) % UpWaves.length];
  const DownWave = DownWaves[(index + 1) % DownWaves.length];

  return (
    <BackgroundImageContainer
      backgroundImage={shelf.backgroundImage}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
    >
      <MainContainer>
        <FlexContainer reverse={index % 2 === 0}>
          <ShelfFrame backgroundColor={shelf.backgroundColor.css} reverse={index % 2 === 0}>
            <Title level={3} color={shelf.titleColor.css}>
              {shelf.name}
            </Title>
            <Text>
              <Markdown>{shelf.description}</Markdown>
            </Text>
            <Link to={`/shelf/${shelf.slug}`}>
              <Button>Découvrir</Button>
            </Link>
          </ShelfFrame>
        </FlexContainer>
      </MainContainer>
      <Separator>
        <UpWave color={shelf.backgroundColor.css || '#000'} />
        <Filler color={shelf.backgroundColor.css} height="8em" />
        <DownWave color={shelf.backgroundColor.css || '#000'} />
      </Separator>
    </BackgroundImageContainer>
  );
};

export default ShelfPreview;
