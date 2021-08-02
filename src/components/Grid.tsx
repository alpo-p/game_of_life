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
  const [grid, setGrid] = useState<number[][]>(initialGrid);
  const [seconds, setSeconds] = useState(0);

  const updateGrid = () => {
    console.log("running the function");
    const copyedGrid = [...grid];

    const NEIGHBOUR_DIRECTIONS = [
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 1],
      [-1, 0],
      [1, 0]
    ];

    for (let i = 0; i < grid.length; i++ ) {
      for (let j = 0; j < grid.length; j++ ) {
        let neigbhourCount = 0;

        NEIGHBOUR_DIRECTIONS.forEach(dir => {
          const x = dir[0];
          const y = dir[1];

          if (i + x < grid.length && i + x > -1 &&
              j + y < grid.length && j + y > -1
            ) {
              if (grid[i + x][j + y] === 1) {
                neigbhourCount++;
              }
            }
        });

        if (grid[i][j] === 1 && (neigbhourCount > 3 || neigbhourCount === 1 )) {
          copyedGrid[i][j] = 0;
        }

        if(grid[i][j] === 0 && neigbhourCount === 3) {
          copyedGrid[i][j] = 1;
        }
      }
    }

    setGrid(copyedGrid);
  }; 

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(sec => sec + 1);
    }, 1000);
    updateGrid();
    return () => clearInterval(interval);
  }, [seconds]);

  const handleClickEvent = (x: number, y: number) => {
    setGrid(matrix => {
      if (matrix[x][y] === 0) {
        matrix[x][y] = 1;
      } else {
        matrix[x][y] = 0;
      }
      return matrix;
    });
  };

  return (
    <div style={styles.container}>
      {grid.map((row, x) => 
        <div style={styles.row} key={uuid()}>
          {
            row.map((cell, y) => 
              <SingleCell 
                key={uuid()} 
                isAlive={Boolean(cell)}
                position={{x, y}}
                handleClickEvent={handleClickEvent}
              />
            )
          }
        </div>
      )}
    </div>
  );
};
