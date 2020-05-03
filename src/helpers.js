export const computeBpmValue = (bpm) => 60000 / bpm;

export const range = (start = 0, end, step = 1) => {
  const result = [];

  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
};
