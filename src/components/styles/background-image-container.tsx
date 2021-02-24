import styled from '@emotion/styled';

interface BackgroundImageContainerProps {
  backgroundImage: {
    url: string;
  };
  backgroundSize: 'cover' | 'contain' | 'auto';
  backgroundPosition: string;
  backgroundAttachment: 'fixed' | 'local' | 'scroll';
  reverse: boolean;
}

const BackgroundImageContainer = styled.div<BackgroundImageContainerProps>`
  padding: 4em;
  background-image: url(${({ backgroundImage }): string => backgroundImage.url});
  background-size: ${({ backgroundSize }): string => backgroundSize};
  background-position: ${({ backgroundPosition }): string => backgroundPosition};
  background-attachment: ${({ backgroundAttachment }): string => backgroundAttachment};
  display: flex;
  flex-direction: ${({ reverse }): string => (reverse ? 'row-reverse' : 'row')};
`;

export default BackgroundImageContainer;
