import React from 'react';
import { useEffect } from 'react';
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

interface P { isAlive?: boolean; }

export const SingleCell = ({ isAlive }: P) => {
  const [aliveState, setAliveState] = useState<boolean>(false);

  useEffect(
    () => setAliveState(Boolean(isAlive))
  ,[]);

  const handleClick = () => {
    setAliveState(state => !state);
  };

  return (
    aliveState
      ? <div onClick={handleClick} style={gridBoxStyleAlive} />
      : <div onClick={handleClick} style={gridBoxStyleDead} />
  );
};
