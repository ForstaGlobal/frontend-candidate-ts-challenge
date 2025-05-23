import { describe, it, expect } from 'vitest';
import { countOccurrences } from '../functions/countOccurrences';
import testData from '../testData.json';

describe('countOccurrences', () => {
  testData.countOccurrences.forEach(({ str, char, result }, idx) => {
    describe(`case #${idx + 1}`, () => {
      it(`countOccurrences("${str}", "${char}") → ${result}`, () => {
        expect(countOccurrences(str, char)).toBe(result);
      });
    });
  });
});
