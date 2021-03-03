import React, { FC } from 'react';
import styled from '@emotion/styled';

const sizes = {
  1: 1.7,
  2: 1.6,
  3: 1.5,
  4: 1.4,
  5: 1.3,
  6: 1.2,
};

interface TitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
}

const TitleStyle = styled.span<TitleProps>`
  color: ${({ color }): string => color || 'rgba(0, 0, 0, 0)'};
  text-transform: uppercase;
  font-size: ${({ level }): number => sizes[level]}em;
  font-family: 'Oswald', 'sans-serif';
  font-style: italic;
  letter-spacing: 0.1em;
`;

const Title: FC<TitleProps> = ({ level, color, children }) => {
  const ComponentName = `h${level}`;

  return (
    <ComponentName>
      <TitleStyle level={level} color={color}>
        {children}
      </TitleStyle>
    </ComponentName>
  );
};

export default Title;