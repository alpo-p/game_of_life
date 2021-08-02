import React, { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { SingleCell } from './SingleCell';

export const Grid = () => {
  const [grid, setGrid] = useState<number[][]>([[0]]);

  useEffect(() => {
    setGrid([
      [0, 0, 1],
      [0, 0, 0],
      [0, 1, 0],
    ]);
  }, []);

  return (
    <div>
      {grid.map(row => row.map(cell => <SingleCell key={uuid()} isAlive={Boolean(cell)} />)
      )}
    </div>
  );
};
