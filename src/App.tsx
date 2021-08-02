import React from 'react';

const gridBoxStyleDead = {
  borderStyle: 'solid',
  borderWidth: 1,
  height: 12,
  width: 12,
}

const gridBoxStyleAlive = {
  ...gridBoxStyleDead,
   backgroundColor: 'black',
}

interface P { isAlive?: boolean }

const GridBox = ({ isAlive }: P) => (
  isAlive 
    ? <div style={gridBoxStyleAlive} />
    : <div style={gridBoxStyleDead} /> 
) 

function App() {
  return (
    <GridBox isAlive/>
  );
}

export default App;
