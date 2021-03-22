import React, { FC } from 'react';
import { Filler, Wave } from './styles';
import styled from '@emotion/styled';

interface SeparatorProps {
  backgroundColor: string;
  wavePath: string;
  upWavePath: string;
}

const Separator: FC<SeparatorProps> = ({ children, backgroundColor, wavePath, upWavePath }) => {

  const styles = {
    HeaderContainer: styled.div`
      position: relative;
    `,
    Separator: styled.div`
      position: absolute;
      z-index: 1;
      transform: scale(1, 0.5);
      transform-origin: top center;
    `,
  };

  const currentWavePath = wavePath || "M0,64L48,96C96,128,192,192,288,213.3C384,235,480,213,576,170.7C672,128,768,64,864,53.3C960,43,1056,85,1152,133.3C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";
  const currentUpWavePath = upWavePath || "M0,32L48,64C96,96,192,160,288,208C384,256,480,288,576,277.3C672,267,768,213,864,160C960,107,1056,53,1152,58.7C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

  return (
    <styles.HeaderContainer>
      <Filler color={backgroundColor} height="6em" />
      {children}
      <Filler color={backgroundColor} height="6em" />

      <Wave color={backgroundColor} path={currentUpWavePath} />
      <styles.Separator>
        <Wave color={backgroundColor} path={currentWavePath} />

      </styles.Separator>
    </styles.HeaderContainer>
  )
}

export default Separator;
