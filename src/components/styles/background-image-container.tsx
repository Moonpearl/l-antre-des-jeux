import styled from '@emotion/styled';

interface BackgroundImageContainerProps {
  backgroundImage: {
    url: string
  }
  backgroundSize: 'cover' | 'contain' | 'auto';
  backgroundPosition: string;
  backgroundAttachment: 'fixed' | 'local' | 'scroll';
  reverse: boolean;
}

const BackgroundImageContainer = styled.li<BackgroundImageContainerProps>`
  padding: 4em;
  background-image: url(${props => props.backgroundImage.url});
  background-size: ${props => props.backgroundSize};
  background-position: ${props => props.backgroundPosition};
  background-attachment: ${props => props.backgroundAttachment};
  display: flex;
  flex-direction: row${props => props.reverse ? '-reverse' : ''};
`

export default BackgroundImageContainer
