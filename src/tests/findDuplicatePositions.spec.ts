import { describe, it, expect } from 'vitest';
import { findDuplicatePositions } from '../functions/findDuplicatePositions';
import testData from '../testData.json';

describe('findDuplicatePositions', () => {
  testData.findDuplicatePositions.forEach(({ arr, result }, idx) => {
    describe(`case #${idx + 1}`, () => {
      it(`findDuplicatePositions(${JSON.stringify(arr)}) → ${JSON.stringify(result)}`, () => {
        const actual = findDuplicatePositions(arr);
        expect(Object.keys(actual), 'The keys of the result must be the same').toEqual(Object.keys(result));
        expect(actual).toEqual(result);
      });
    });
  });
});
