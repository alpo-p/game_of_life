import React from 'react';

const gridBoxStyleDead = {
  borderStyle: 'solid',
  borderWidth: 1,
  height: 12,
  width: 12,
};

const gridBoxStyleAlive = {
  ...gridBoxStyleDead,
  borderColor: 'white',
  backgroundColor: 'black',
};

interface P { isAlive?: boolean; }

export const SingleCell = ({ isAlive }: P) => (
  isAlive
    ? <div style={gridBoxStyleAlive} />
    : <div style={gridBoxStyleDead} />
);
