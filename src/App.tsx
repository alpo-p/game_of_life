import React from 'react';

import { Grid } from './components/Grid';
import { createRandomArray } from './utils';

const initialGrid = createRandomArray(5,5);

function App() {
  return (
    <Grid initialGrid={initialGrid}/>
  );
}

export default App;
