import React, { FC } from 'react';
import WaveProps from '../wave-props';

const Wave5: FC<WaveProps> = ({ color }) => (
  <svg className="wave up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill={color}
      fillOpacity="1"
      d="M0,128L9.6,128C19.2,128,38,128,58,138.7C76.8,149,96,171,115,181.3C134.4,192,154,192,173,176C192,160,211,128,230,128C249.6,128,269,160,288,176C307.2,192,326,192,346,176C364.8,160,384,128,403,128C422.4,128,442,160,461,165.3C480,171,499,149,518,122.7C537.6,96,557,64,576,74.7C595.2,85,614,139,634,154.7C652.8,171,672,149,691,138.7C710.4,128,730,128,749,122.7C768,117,787,107,806,117.3C825.6,128,845,160,864,165.3C883.2,171,902,149,922,122.7C940.8,96,960,64,979,69.3C998.4,75,1018,117,1037,112C1056,107,1075,53,1094,48C1113.6,43,1133,85,1152,106.7C1171.2,128,1190,128,1210,117.3C1228.8,107,1248,85,1267,112C1286.4,139,1306,213,1325,245.3C1344,277,1363,267,1382,250.7C1401.6,235,1421,213,1430,202.7L1440,192L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"
    ></path>
  </svg>
);

export default Wave5;