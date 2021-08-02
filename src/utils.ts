export const createRandomArray = (x: number, y: number): number[][] => {
  const outputArray = [];
  for (let i = 0; i < x; i++) {
    const row = [];
    for (let j = 0; j < y; j++) {
      row.push(Math.round(Math.random()));
    }
    outputArray.push(row);
  }

  return outputArray;
};
