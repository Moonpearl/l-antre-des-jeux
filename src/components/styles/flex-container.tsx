import styled from '@emotion/styled';

interface FlexContainerProps {
  reverse: boolean;
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ reverse }): string => (reverse ? 'row-reverse' : 'row')};
`;

export default FlexContainer;
