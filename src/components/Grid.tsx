import React, { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { SingleCell } from './SingleCell';

interface Props {
  initialGrid: number[][]
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  row: {
    display: 'flex',
    flexDirection: 'row' as const,
  }
};

export const Grid = ({ initialGrid }: Props) => {
  const [grid, setGrid] = useState<number[][]>([[0]]);

  useEffect(() => {
    setGrid(initialGrid);
  }, [initialGrid]);

  return (
    <div style={styles.container}>
      {grid.map(row => 
        <div style={styles.row} key={uuid()}>
          {
            row.map(cell => <SingleCell key={uuid()} isAlive={Boolean(cell)} />)
          }
        </div>
      )}
    </div>
  );
};
