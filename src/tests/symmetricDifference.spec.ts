import { describe, it, expect } from 'vitest';
import { symmetricDifference } from '../functions/symmetricDifference';
import testData from '../testData.json';

describe('symmetricDifference', () => {
  testData.symmetricDifference.forEach(({ a, b, result }, idx) => {
    describe(`case #${idx + 1}`, () => {
      it(`symmetricDifference(${JSON.stringify(a)}, ${JSON.stringify(b)}) → ${JSON.stringify(result)}`, () => {
        const actual = symmetricDifference(a, b);
        expect(actual.length, `The result must have ${result.length} elements`).toBe(result.length);
        expect(actual, 'The result must include all members of the expected result').toIncludeSameMembers(result);
      });
    });
  });
});
