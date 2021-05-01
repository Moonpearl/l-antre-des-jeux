import React, { FC } from 'react';
import { Filler, Wave, BackgroundColorContainer } from './styles';
import styled from '@emotion/styled';

interface PageHeaderProps {
  backgroundColor: string;
  wavePath: string;
}

const PageHeader: FC<PageHeaderProps> = ({ children, backgroundColor, wavePath }) => {
  // ANCHOR Styles
  const styles = {
    HeaderContainer: styled.div`
      position: relative;
    `,
    Logo: styled.img`
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 5;
      filter: drop-shadow(5px 5px 5px #333);
    `,
    Separator: styled.div`
      position: absolute;
      z-index: 1;
      transform: scale(1, 0.5);
      transform-origin: top center;
    `,
  };

  const currentWavePath = wavePath || "M0,128L18.5,154.7C36.9,181,74,235,111,245.3C147.7,256,185,224,222,176C258.5,128,295,64,332,42.7C369.2,21,406,43,443,64C480,85,517,107,554,144C590.8,181,628,235,665,224C701.5,213,738,139,775,112C812.3,85,849,107,886,112C923.1,117,960,107,997,101.3C1033.8,96,1071,96,1108,96C1144.6,96,1182,96,1218,96C1255.4,96,1292,96,1329,106.7C1366.2,117,1403,139,1422,149.3L1440,160L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z";

  return (
    <styles.HeaderContainer>
      <Filler color={backgroundColor} height="6em" />
      <BackgroundColorContainer color={backgroundColor}>
        {children}
      </BackgroundColorContainer>
      <styles.Separator>
        <Wave color={backgroundColor} path={currentWavePath} />
      </styles.Separator>
    </styles.HeaderContainer>
  )
}

export default PageHeader;
