import styled from '@emotion/styled';

interface BackgroundImageContainerProps {
  backgroundImage: {
    url: string;
  };
  backgroundSize: 'cover' | 'contain' | 'auto';
  backgroundPosition: string;
  backgroundAttachment: 'fixed' | 'local' | 'scroll';
}

const BackgroundImageContainer = styled.div<BackgroundImageContainerProps>`
  background-image: url(${({ backgroundImage }): string => backgroundImage.url});
  background-size: ${({ backgroundSize }): string => backgroundSize};
  background-position: ${({ backgroundPosition }): string => backgroundPosition};
  background-attachment: ${({ backgroundAttachment }): string => backgroundAttachment};
`;

export default BackgroundImageContainer;
