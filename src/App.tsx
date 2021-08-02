import React from 'react';

import { Grid } from './components/Grid';

const initialGrid = [
  [0, 0, 1],
  [0, 0, 0],
  [0, 1, 0],
];

function App() {
  return (
    <Grid initialGrid={initialGrid}/>
  );
}

export default App;
