function minMax(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return {
    max: max,
    min: min,
  };
}

console.log(minMax(100, 200, 300));

