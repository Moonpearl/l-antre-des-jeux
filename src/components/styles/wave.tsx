import React, { FC } from 'react';

/* Composant capable de prendre la forme de n'importe quelle vague*/

interface WaveProps {
  color: string;
  path: string;
  up?: boolean;
}

const Wave: FC<WaveProps> = ({ color, path, up }) => {
  return (
    <div className="wave-container">
      <svg className={`wave ${up ? 'up' : 'down'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={color} fillOpacity="1" d={path} z-index={100}></path>
      </svg>
    </div>
  );
};

export default Wave;
