import React, { FC } from 'react';
import WaveProps from '../wave-props';

const Wave2: FC<WaveProps> = ({ color }) => (
  <svg className="wave down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill={color}
      fillOpacity="1"
      d="M0,224L9.6,234.7C19.2,245,38,267,58,277.3C76.8,288,96,288,115,288C134.4,288,154,288,173,282.7C192,277,211,267,230,256C249.6,245,269,235,288,240C307.2,245,326,267,346,240C364.8,213,384,139,403,117.3C422.4,96,442,128,461,122.7C480,117,499,75,518,85.3C537.6,96,557,160,576,197.3C595.2,235,614,245,634,224C652.8,203,672,149,691,117.3C710.4,85,730,75,749,106.7C768,139,787,213,806,208C825.6,203,845,117,864,74.7C883.2,32,902,32,922,80C940.8,128,960,224,979,266.7C998.4,309,1018,299,1037,272C1056,245,1075,203,1094,197.3C1113.6,192,1133,224,1152,229.3C1171.2,235,1190,213,1210,181.3C1228.8,149,1248,107,1267,101.3C1286.4,96,1306,128,1325,149.3C1344,171,1363,181,1382,160C1401.6,139,1421,85,1430,58.7L1440,32L1440,0L1430.4,0C1420.8,0,1402,0,1382,0C1363.2,0,1344,0,1325,0C1305.6,0,1286,0,1267,0C1248,0,1229,0,1210,0C1190.4,0,1171,0,1152,0C1132.8,0,1114,0,1094,0C1075.2,0,1056,0,1037,0C1017.6,0,998,0,979,0C960,0,941,0,922,0C902.4,0,883,0,864,0C844.8,0,826,0,806,0C787.2,0,768,0,749,0C729.6,0,710,0,691,0C672,0,653,0,634,0C614.4,0,595,0,576,0C556.8,0,538,0,518,0C499.2,0,480,0,461,0C441.6,0,422,0,403,0C384,0,365,0,346,0C326.4,0,307,0,288,0C268.8,0,250,0,230,0C211.2,0,192,0,173,0C153.6,0,134,0,115,0C96,0,77,0,58,0C38.4,0,19,0,10,0L0,0Z"
    ></path>
  </svg>
);
export default Wave2;