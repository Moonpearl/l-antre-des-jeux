import styled from '@emotion/styled';

interface BackgroundColorContainerProps {
  color?: string;
}

const BackgroundColorContainer = styled.div<BackgroundColorContainerProps>`
  background-color: ${({ color }): string => (color ? color : 'rgba(0, 0, 0, 0)')};
`;

export default BackgroundColorContainer;
