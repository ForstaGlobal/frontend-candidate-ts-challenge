import { describe, it, expect } from 'vitest';
import { findDuplicates } from '../functions/findDuplicates';
import testData from '../testData.json';

describe('findDuplicates', () => {
  testData.findDuplicates.forEach(({ str, result }, idx) => {
    describe(`case #${idx + 1}`, () => {
      it(`findDuplicates("${str}") → ${JSON.stringify(result)}`, () => {
        const result = findDuplicates(str);
        expect(result.length, `The result must have ${result.length} elements`).toBe(result.length);
        expect(result, 'The result must include all members of the expected result').toIncludeSameMembers(result);
      });
    });
  });
});
