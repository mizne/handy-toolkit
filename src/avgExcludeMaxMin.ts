export function avgExcludeMaxMin(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr.length === 2) {
    return (arr[0] + arr[1]) / 2;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((accu, curr) => accu + curr, 0);
  const avgExcludeMinMax = (sum - max - min) / (arr.length - 2);

  return avgExcludeMinMax;
}