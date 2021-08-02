import React from 'react';

import { Grid } from './components/Grid';
import { createRandomArray } from './utils';

const initialGrid = createRandomArray(15,15);

function App() {
  return (
    <Grid initialGrid={initialGrid}/>
  );
}

export default App;
