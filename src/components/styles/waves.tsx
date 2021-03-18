import React, { FC } from 'react';

interface AllWaveProps {
  color?: string;
  imageUrl: string; /*xmlns*/
  viewBox: number;
  fill: { color };
  fillOpacity: number;
  down: {
    path: number; /*svg path d=*/
  }
  up: {
    path: number; /*svg path d=*/
  }
};

const { path } = path;

const AllWave: FC<AllWaveProps> = ({ color }) => {
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill={color}
      fillOpacity="1"
      path={path}
    ></path>
  </svg>
};


export default AllWave;
