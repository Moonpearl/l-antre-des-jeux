import styled from '@emotion/styled';

interface FillerProps {
  color?: string;
  height: string;
  marginTop?: string;
}

const Filler = styled.div<FillerProps>`
  background-color: ${({ color }): string => color || 'rgba(0, 0, 0, 0)'};
  min-height: ${({ height }): string => height};
  ${({ marginTop }): string => (marginTop ? `margin-top: ${marginTop};` : '')}
`;

export default Filler;
