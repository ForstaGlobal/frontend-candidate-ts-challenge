import { describe, it, expect } from 'vitest';
import { countOccurrences } from '../functions/countOccurrences';
import testData from '../testData.json';

describe('countOccurrences', () => {
  testData.countOccurrences.forEach(({ str, subString, result }, idx) => {
    describe(`case #${idx + 1}`, () => {
      it(`countOccurrences("${str}", "${subString}") → ${result}`, () => {
        expect(countOccurrences(str, subString)).toBe(result);
      });
    });
  });
});
