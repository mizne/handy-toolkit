// tests/avgExcludeMaxMin.test.ts
import { avgExcludeMaxMin } from '../src/avgExcludeMaxMin';

test('avg [] to equal 0', () => {
  expect(avgExcludeMaxMin([])).toBe(0);
});

test('avg [2] to equal 2', () => {
  expect(avgExcludeMaxMin([2])).toBe(2);
});

test('avg [1, 4] to equal 2.5', () => {
  expect(avgExcludeMaxMin([1, 4])).toBe(2.5);
});

test('avg [1,2,3] to equal 2', () => {
  expect(avgExcludeMaxMin([1, 2, 3])).toBe(2);
});

test('avg [1,2,3,4] to equal 2.5', () => {
  expect(avgExcludeMaxMin([1, 2, 3, 4])).toBe(2.5);
});