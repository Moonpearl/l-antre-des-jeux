import React, { FC } from 'react';
import WaveProps from '../wave-props';

const Wave2: FC<WaveProps> = ({ color }) => (
  <svg className="wave up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill={color}
      fillOpacity="1"
      d="M0,64L9.6,80C19.2,96,38,128,58,149.3C76.8,171,96,181,115,160C134.4,139,154,85,173,90.7C192,96,211,160,230,197.3C249.6,235,269,245,288,240C307.2,235,326,213,346,176C364.8,139,384,85,403,69.3C422.4,53,442,75,461,80C480,85,499,75,518,90.7C537.6,107,557,149,576,186.7C595.2,224,614,256,634,229.3C652.8,203,672,117,691,80C710.4,43,730,53,749,74.7C768,96,787,128,806,154.7C825.6,181,845,203,864,186.7C883.2,171,902,117,922,90.7C940.8,64,960,64,979,74.7C998.4,85,1018,107,1037,149.3C1056,192,1075,256,1094,282.7C1113.6,309,1133,299,1152,288C1171.2,277,1190,267,1210,245.3C1228.8,224,1248,192,1267,186.7C1286.4,181,1306,203,1325,213.3C1344,224,1363,224,1382,218.7C1401.6,213,1421,203,1430,197.3L1440,192L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"
    ></path>
  </svg>
);

export default Wave2;
