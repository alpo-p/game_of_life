import React from 'react';
import { useState } from 'react';

const gridBoxStyleDead = {
  borderStyle: 'solid',
  borderWidth: 1,
  height: 12,
  width: 12,
  margin: 0.5,
};

const gridBoxStyleAlive = {
  ...gridBoxStyleDead,
  borderColor: 'white',
  backgroundColor: 'black',
};

interface P { 
  isAlive?: boolean,
  handleClickEvent: (x: number, y: number) => void
  position: {
    y: number,
    x: number
  }
}

export const SingleCell = ({ isAlive, handleClickEvent, position }: P) => {
  const [aliveState, setAliveState] = useState(Boolean(isAlive));

  const handleClick = () => {
    setAliveState(state => !state);
    const { y, x } = position;
    handleClickEvent(y, x);
  };

  return (
    aliveState
      ? <div onClick={handleClick} style={gridBoxStyleAlive} />
      : <div onClick={handleClick} style={gridBoxStyleDead} />
  );
};
