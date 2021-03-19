import React, { FC } from 'react';
import DownWaves from './waves/down/index';
import UpWaves from './waves/up/index';

const DownWaves = DownWaves[0];
const UpWaves = UpWaves = [0];

interface AllWaveProps {
  color: string;
  imageUrl: string; /*xmlns*/
  viewBox: string;
  fill: string;
  fillOpacity: string;
  path: {
    UpPath: string;
    DownPath: string;
  }
};


const UpWavesPaths = [
  "M0,288L18.5,288C36.9,288,74,288,111,282.7C147.7,277,185,267,222,234.7C258.5,203,295,149,332,128C369.2,107,406,117,443,101.3C480,85,517,43,554,26.7C590.8,11,628,21,665,58.7C701.5,96,738,160,775,160C812.3,160,849,96,886,106.7C923.1,117,960,203,997,240C1033.8,277,1071,267,1108,234.7C1144.6,203,1182,149,1218,117.3C1255.4,85,1292,75,1329,112C1366.2,149,1403,235,1422,277.3L1440,320L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z",
  "M0,64L9.6,58.7C19.2,53,38,43,58,48C76.8,53,96,75,115,122.7C134.4,171,154,245,173,266.7C192,288,211,256,230,250.7C249.6,245,269,267,288,277.3C307.2,288,326,288,346,277.3C364.8,267,384,245,403,234.7C422.4,224,442,224,461,213.3C480,203,499,181,518,149.3C537.6,117,557,75,576,48C595.2,21,614,11,634,32C652.8,53,672,107,691,144C710.4,181,730,203,749,176C768,149,787,75,806,85.3C825.6,96,845,192,864,197.3C883.2,203,902,117,922,90.7C940.8,64,960,96,979,112C998.4,128,1018,128,1037,106.7C1056,85,1075,43,1094,48C1113.6,53,1133,107,1152,149.3C1171.2,192,1190,224,1210,208C1228.8,192,1248,128,1267,112C1286.4,96,1306,128,1325,128C1344,128,1363,96,1382,96C1401.6,96,1421,128,1430,144L1440,160L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z",
  "M0,64L9.6,80C19.2,96,38,128,58,149.3C76.8,171,96,181,115,160C134.4,139,154,85,173,90.7C192,96,211,160,230,197.3C249.6,235,269,245,288,240C307.2,235,326,213,346,176C364.8,139,384,85,403,69.3C422.4,53,442,75,461,80C480,85,499,75,518,90.7C537.6,107,557,149,576,186.7C595.2,224,614,256,634,229.3C652.8,203,672,117,691,80C710.4,43,730,53,749,74.7C768,96,787,128,806,154.7C825.6,181,845,203,864,186.7C883.2,171,902,117,922,90.7C940.8,64,960,64,979,74.7C998.4,85,1018,107,1037,149.3C1056,192,1075,256,1094,282.7C1113.6,309,1133,299,1152,288C1171.2,277,1190,267,1210,245.3C1228.8,224,1248,192,1267,186.7C1286.4,181,1306,203,1325,213.3C1344,224,1363,224,1382,218.7C1401.6,213,1421,203,1430,197.3L1440,192L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z",
  "M0,96L9.6,90.7C19.2,85,38,75,58,106.7C76.8,139,96,213,115,229.3C134.4,245,154,203,173,197.3C192,192,211,224,230,202.7C249.6,181,269,107,288,80C307.2,53,326,75,346,101.3C364.8,128,384,160,403,149.3C422.4,139,442,85,461,80C480,75,499,117,518,122.7C537.6,128,557,96,576,101.3C595.2,107,614,149,634,170.7C652.8,192,672,192,691,181.3C710.4,171,730,149,749,144C768,139,787,149,806,138.7C825.6,128,845,96,864,80C883.2,64,902,64,922,96C940.8,128,960,192,979,229.3C998.4,267,1018,277,1037,266.7C1056,256,1075,224,1094,224C1113.6,224,1133,256,1152,272C1171.2,288,1190,288,1210,256C1228.8,224,1248,160,1267,133.3C1286.4,107,1306,117,1325,138.7C1344,160,1363,192,1382,218.7C1401.6,245,1421,267,1430,277.3L1440,288L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z",
  "M0,32L9.6,58.7C19.2,85,38,139,58,133.3C76.8,128,96,64,115,80C134.4,96,154,192,173,234.7C192,277,211,267,230,245.3C249.6,224,269,192,288,170.7C307.2,149,326,139,346,128C364.8,117,384,107,403,122.7C422.4,139,442,181,461,208C480,235,499,245,518,240C537.6,235,557,213,576,208C595.2,203,614,213,634,213.3C652.8,213,672,203,691,176C710.4,149,730,107,749,117.3C768,128,787,192,806,229.3C825.6,267,845,277,864,272C883.2,267,902,245,922,245.3C940.8,245,960,267,979,250.7C998.4,235,1018,181,1037,165.3C1056,149,1075,171,1094,197.3C1113.6,224,1133,256,1152,250.7C1171.2,245,1190,203,1210,170.7C1228.8,139,1248,117,1267,122.7C1286.4,128,1306,160,1325,160C1344,160,1363,128,1382,122.7C1401.6,117,1421,139,1430,149.3L1440,160L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z",
  "M0,128L9.6,128C19.2,128,38,128,58,138.7C76.8,149,96,171,115,181.3C134.4,192,154,192,173,176C192,160,211,128,230,128C249.6,128,269,160,288,176C307.2,192,326,192,346,176C364.8,160,384,128,403,128C422.4,128,442,160,461,165.3C480,171,499,149,518,122.7C537.6,96,557,64,576,74.7C595.2,85,614,139,634,154.7C652.8,171,672,149,691,138.7C710.4,128,730,128,749,122.7C768,117,787,107,806,117.3C825.6,128,845,160,864,165.3C883.2,171,902,149,922,122.7C940.8,96,960,64,979,69.3C998.4,75,1018,117,1037,112C1056,107,1075,53,1094,48C1113.6,43,1133,85,1152,106.7C1171.2,128,1190,128,1210,117.3C1228.8,107,1248,85,1267,112C1286.4,139,1306,213,1325,245.3C1344,277,1363,267,1382,250.7C1401.6,235,1421,213,1430,202.7L1440,192L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"
]


const DownWavesPath = [
  " M0,128L18.5,154.7C36.9,181,74,235,111,245.3C147.7,256,185,224,222,176C258.5,128,295,64,332,42.7C369.2,21,406,43,443,64C480,85,517,107,554,144C590.8,181,628,235,665,224C701.5,213,738,139,775,112C812.3,85,849,107,886,112C923.1,117,960,107,997,101.3C1033.8,96,1071,96,1108,96C1144.6,96,1182,96,1218,96C1255.4,96,1292,96,1329,106.7C1366.2,117,1403,139,1422,149.3L1440,160L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z",
  "M0,128L9.6,128C19.2,128,38,128,58,138.7C76.8,149,96,171,115,181.3C134.4,192,154,192,173,176C192,160,211,128,230,128C249.6,128,269,160,288,176C307.2,192,326,192,346,176C364.8,160,384,128,403,128C422.4,128,442,160,461,165.3C480,171,499,149,518,122.7C537.6,96,557,64,576,74.7C595.2,85,614,139,634,154.7C652.8,171,672,149,691,138.7C710.4,128,730,128,749,122.7C768,117,787,107,806,117.3C825.6,128,845,160,864,165.3C883.2,171,902,149,922,122.7C940.8,96,960,64,979,69.3C998.4,75,1018,117,1037,112C1056,107,1075,53,1094,48C1113.6,43,1133,85,1152,106.7C1171.2,128,1190,128,1210,117.3C1228.8,107,1248,85,1267,112C1286.4,139,1306,213,1325,245.3C1344,277,1363,267,1382,250.7C1401.6,235,1421,213,1430,202.7L1440,192L1440,0L1430.4,0C1420.8,0,1402,0,1382,0C1363.2,0,1344,0,1325,0C1305.6,0,1286,0,1267,0C1248,0,1229,0,1210,0C1190.4,0,1171,0,1152,0C1132.8,0,1114,0,1094,0C1075.2,0,1056,0,1037,0C1017.6,0,998,0,979,0C960,0,941,0,922,0C902.4,0,883,0,864,0C844.8,0,826,0,806,0C787.2,0,768,0,749,0C729.6,0,710,0,691,0C672,0,653,0,634,0C614.4,0,595,0,576,0C556.8,0,538,0,518,0C499.2,0,480,0,461,0C441.6,0,422,0,403,0C384,0,365,0,346,0C326.4,0,307,0,288,0C268.8,0,250,0,230,0C211.2,0,192,0,173,0C153.6,0,134,0,115,0C96,0,77,0,58,0C38.4,0,19,0,10,0L0,0Z",
  "M0,224L9.6,234.7C19.2,245,38,267,58,277.3C76.8,288,96,288,115,288C134.4,288,154,288,173,282.7C192,277,211,267,230,256C249.6,245,269,235,288,240C307.2,245,326,267,346,240C364.8,213,384,139,403,117.3C422.4,96,442,128,461,122.7C480,117,499,75,518,85.3C537.6,96,557,160,576,197.3C595.2,235,614,245,634,224C652.8,203,672,149,691,117.3C710.4,85,730,75,749,106.7C768,139,787,213,806,208C825.6,203,845,117,864,74.7C883.2,32,902,32,922,80C940.8,128,960,224,979,266.7C998.4,309,1018,299,1037,272C1056,245,1075,203,1094,197.3C1113.6,192,1133,224,1152,229.3C1171.2,235,1190,213,1210,181.3C1228.8,149,1248,107,1267,101.3C1286.4,96,1306,128,1325,149.3C1344,171,1363,181,1382,160C1401.6,139,1421,85,1430,58.7L1440,32L1440,0L1430.4,0C1420.8,0,1402,0,1382,0C1363.2,0,1344,0,1325,0C1305.6,0,1286,0,1267,0C1248,0,1229,0,1210,0C1190.4,0,1171,0,1152,0C1132.8,0,1114,0,1094,0C1075.2,0,1056,0,1037,0C1017.6,0,998,0,979,0C960,0,941,0,922,0C902.4,0,883,0,864,0C844.8,0,826,0,806,0C787.2,0,768,0,749,0C729.6,0,710,0,691,0C672,0,653,0,634,0C614.4,0,595,0,576,0C556.8,0,538,0,518,0C499.2,0,480,0,461,0C441.6,0,422,0,403,0C384,0,365,0,346,0C326.4,0,307,0,288,0C268.8,0,250,0,230,0C211.2,0,192,0,173,0C153.6,0,134,0,115,0C96,0,77,0,58,0C38.4,0,19,0,10,0L0,0Z",
  "M0,224L9.6,234.7C19.2,245,38,267,58,245.3C76.8,224,96,160,115,133.3C134.4,107,154,117,173,112C192,107,211,85,230,90.7C249.6,96,269,128,288,138.7C307.2,149,326,139,346,122.7C364.8,107,384,85,403,74.7C422.4,64,442,64,461,74.7C480,85,499,107,518,138.7C537.6,171,557,213,576,202.7C595.2,192,614,128,634,96C652.8,64,672,64,691,69.3C710.4,75,730,85,749,117.3C768,149,787,203,806,229.3C825.6,256,845,256,864,245.3C883.2,235,902,213,922,181.3C940.8,149,960,107,979,112C998.4,117,1018,171,1037,197.3C1056,224,1075,224,1094,240C1113.6,256,1133,288,1152,293.3C1171.2,299,1190,277,1210,224C1228.8,171,1248,85,1267,80C1286.4,75,1306,149,1325,181.3C1344,213,1363,203,1382,176C1401.6,149,1421,107,1430,85.3L1440,64L1440,0L1430.4,0C1420.8,0,1402,0,1382,0C1363.2,0,1344,0,1325,0C1305.6,0,1286,0,1267,0C1248,0,1229,0,1210,0C1190.4,0,1171,0,1152,0C1132.8,0,1114,0,1094,0C1075.2,0,1056,0,1037,0C1017.6,0,998,0,979,0C960,0,941,0,922,0C902.4,0,883,0,864,0C844.8,0,826,0,806,0C787.2,0,768,0,749,0C729.6,0,710,0,691,0C672,0,653,0,634,0C614.4,0,595,0,576,0C556.8,0,538,0,518,0C499.2,0,480,0,461,0C441.6,0,422,0,403,0C384,0,365,0,346,0C326.4,0,307,0,288,0C268.8,0,250,0,230,0C211.2,0,192,0,173,0C153.6,0,134,0,115,0C96,0,77,0,58,0C38.4,0,19,0,10,0L0,0Z",
  "M0,128L9.6,117.3C19.2,107,38,85,58,101.3C76.8,117,96,171,115,181.3C134.4,192,154,160,173,144C192,128,211,128,230,133.3C249.6,139,269,149,288,176C307.2,203,326,245,346,245.3C364.8,245,384,203,403,170.7C422.4,139,442,117,461,117.3C480,117,499,139,518,128C537.6,117,557,75,576,90.7C595.2,107,614,181,634,197.3C652.8,213,672,171,691,165.3C710.4,160,730,192,749,176C768,160,787,96,806,69.3C825.6,43,845,53,864,64C883.2,75,902,85,922,112C940.8,139,960,181,979,202.7C998.4,224,1018,224,1037,218.7C1056,213,1075,203,1094,218.7C1113.6,235,1133,277,1152,250.7C1171.2,224,1190,128,1210,85.3C1228.8,43,1248,53,1267,69.3C1286.4,85,1306,107,1325,128C1344,149,1363,171,1382,170.7C1401.6,171,1421,149,1430,138.7L1440,128L1440,0L1430.4,0C1420.8,0,1402,0,1382,0C1363.2,0,1344,0,1325,0C1305.6,0,1286,0,1267,0C1248,0,1229,0,1210,0C1190.4,0,1171,0,1152,0C1132.8,0,1114,0,1094,0C1075.2,0,1056,0,1037,0C1017.6,0,998,0,979,0C960,0,941,0,922,0C902.4,0,883,0,864,0C844.8,0,826,0,806,0C787.2,0,768,0,749,0C729.6,0,710,0,691,0C672,0,653,0,634,0C614.4,0,595,0,576,0C556.8,0,538,0,518,0C499.2,0,480,0,461,0C441.6,0,422,0,403,0C384,0,365,0,346,0C326.4,0,307,0,288,0C268.8,0,250,0,230,0C211.2,0,192,0,173,0C153.6,0,134,0,115,0C96,0,77,0,58,0C38.4,0,19,0,10,0L0,0Z",
  "M0,32L9.6,42.7C19.2,53,38,75,58,74.7C76.8,75,96,53,115,69.3C134.4,85,154,139,173,176C192,213,211,235,230,218.7C249.6,203,269,149,288,160C307.2,171,326,245,346,277.3C364.8,309,384,299,403,250.7C422.4,203,442,117,461,117.3C480,117,499,203,518,197.3C537.6,192,557,96,576,48C595.2,0,614,0,634,10.7C652.8,21,672,43,691,85.3C710.4,128,730,192,749,213.3C768,235,787,213,806,213.3C825.6,213,845,235,864,218.7C883.2,203,902,149,922,133.3C940.8,117,960,139,979,133.3C998.4,128,1018,96,1037,101.3C1056,107,1075,149,1094,181.3C1113.6,213,1133,235,1152,256C1171.2,277,1190,299,1210,261.3C1228.8,224,1248,128,1267,101.3C1286.4,75,1306,117,1325,160C1344,203,1363,245,1382,240C1401.6,235,1421,181,1430,154.7L1440,128L1440,0L1430.4,0C1420.8,0,1402,0,1382,0C1363.2,0,1344,0,1325,0C1305.6,0,1286,0,1267,0C1248,0,1229,0,1210,0C1190.4,0,1171,0,1152,0C1132.8,0,1114,0,1094,0C1075.2,0,1056,0,1037,0C1017.6,0,998,0,979,0C960,0,941,0,922,0C902.4,0,883,0,864,0C844.8,0,826,0,806,0C787.2,0,768,0,749,0C729.6,0,710,0,691,0C672,0,653,0,634,0C614.4,0,595,0,576,0C556.8,0,538,0,518,0C499.2,0,480,0,461,0C441.6,0,422,0,403,0C384,0,365,0,346,0C326.4,0,307,0,288,0C268.8,0,250,0,230,0C211.2,0,192,0,173,0C153.6,0,134,0,115,0C96,0,77,0,58,0C38.4,0,19,0,10,0L0,0Z"
]





const AllWave: FC<AllWaveProps> = ({ color }) => {
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill={color}
      fillOpacity="1"
      path={{ UpPath } || { DownPath }}
    ></path>
  </svg>
};


export default AllWave;
