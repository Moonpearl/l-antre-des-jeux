import React, { FC } from 'react';
import { Wave } from './styles';
import styled from '@emotion/styled';
import { Filler } from '../components/styles';

interface SeparatorProps {
  backgroundColor: string;
  downWavePath: string;
  upWavePath: string;
}

const Separator: FC<SeparatorProps> = ({ backgroundColor, downWavePath, upWavePath }) => {

  const styles = {
    Separator: styled.div`
      position: absolute;
      left: 0;
      right: 0;
      bottom: -24rem;
      transform: scale(1, 0.35);
      z-index: 1;
    `,
    DownWave: styled.div`
      position: absolute;
      z-index: 1;
      transform: scale(1, 0.5);
      transform-origin: top center;
      bottom: 5;
    `,
  };

  return (
    <styles.Separator>
      <Wave color={backgroundColor} path={upWavePath} up />
      <Filler color={backgroundColor} height="8em" />
      <Wave color={backgroundColor} path={downWavePath} />
    </styles.Separator>
  )
}

export default Separator;
