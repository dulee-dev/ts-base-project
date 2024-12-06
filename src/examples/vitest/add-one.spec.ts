import { test, expect } from 'vitest';
import { addOne } from './add-one';

test('addOne', () => {
  const a = 1;
  const expected = 2;

  const result = addOne(a);
  expect(result).toEqual(expected);
});
