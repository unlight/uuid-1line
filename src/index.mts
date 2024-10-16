// 4 = 1, 2, 3, 4, 5
// N = 8, 9, A, or B
export default () =>
  'xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx'.replaceAll(
    'x',
    () => Math.random().toString(16).at(3)!,
  );
