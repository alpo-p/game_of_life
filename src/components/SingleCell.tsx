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
    x: number,
    y: number
  }
}

export const SingleCell = ({ isAlive, handleClickEvent, position }: P) => {
  const [aliveState, setAliveState] = useState(Boolean(isAlive));

  const handleClick = () => {
    setAliveState(state => !state);
    const { x, y } = position;
    handleClickEvent(x, y);
  };

  return (
    aliveState
      ? <div onClick={handleClick} style={gridBoxStyleAlive} />
      : <div onClick={handleClick} style={gridBoxStyleDead} />
  );
};
