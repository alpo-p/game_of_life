import React, { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { createEmptyArray, createRandomArray } from '../utils';
import { SingleCell } from './SingleCell';

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

export const Grid = () => {
  const [gridSize, setGridSize] = useState({x: 15, y: 15});
  const initialGrid = createRandomArray(gridSize.x, gridSize.y);

  const [grid, setGrid] = useState<number[][]>(initialGrid);

  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);


  const updateGrid = () => {
    const copyedGrid = [...grid];

    const NEIGHBOUR_DIRECTIONS = [
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [1, 0],
      [-1, 0],
      [-1, 1],
      [-1, -1]
    ];

    for (let j = 0; j < grid.length; j++ ) {
      for (let i = 0; i < grid.length; i++ ) {
        let neigbhourCount = 0;

        NEIGHBOUR_DIRECTIONS.forEach(dir => {
          const x = dir[0];
          const y = dir[1];

          if (i + x < grid.length && i + x > -1 &&
              j + y < grid.length && j + y > -1
            ) {
              if (grid[j + y][i + x] === 1) {
                neigbhourCount++;
              }
            }
        });

        if (grid[j][i] === 1 && (neigbhourCount > 3 || neigbhourCount < 2) ) {
          copyedGrid[j][i] = 0;
        }

        if(grid[j][i] === 0 && neigbhourCount === 3) {
          copyedGrid[j][i] = 1;
        }
      }
    }

    setGrid(copyedGrid);
  }; 

  useEffect(() => {
    if (isPlaying) {
      updateGrid();
      const interval = setInterval(() => {
        setSeconds(sec => sec + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds, isPlaying]);

  const handleClickCell = (y: number, x: number) => {
    setGrid(matrix => {
      if (matrix[y][x] === 0) {
        matrix[y][x] = 1;
      } else {
        matrix[y][x] = 0;
      }
      return matrix;
    });
  };

  const randomizeCells = () => setGrid(createRandomArray(gridSize.x, gridSize.y));
  const emptyCells = () => setGrid(createEmptyArray(gridSize.x, gridSize.y));

  const onChangeGridSize = (size: number) => {
    setGridSize({x: size, y:size});
    return setGrid(createRandomArray(size, size));
  };

  return (
    <div>
      <div style={styles.container}>
        {grid.map((row, y) => 
          <div style={styles.row} key={uuid()}>
            {
              row.map((cell, x) => 
                <SingleCell 
                  key={uuid()} 
                  isAlive={Boolean(cell)}
                  position={{y, x}}
                  handleClickEvent={handleClickCell}
                />
              )
            }
          </div>
        )}
      </div>
      <button onClick={() => setIsPlaying(true)}>Start</button>
      <button onClick={() => setIsPlaying(false)}>Stop</button>
      <button onClick={() => randomizeCells()}>Randomize cells</button>
      <button onClick={() => emptyCells()}>Empty grid</button>
      <div> 
        Size of the grid
        <button onClick={() => onChangeGridSize(15)}>15 x 15</button>
        <button onClick={() => onChangeGridSize(30)}>30 x 30</button>
        <button onClick={() => onChangeGridSize(45)}>45 x 45</button>
      </div>
    </div>
  );
};
