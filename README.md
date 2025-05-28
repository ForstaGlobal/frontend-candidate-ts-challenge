<div style="font-family: 'Fira Code', monospace;">

# 📝 TypeScript Coding Challenge

Welcome to your TypeScript interview challenge!  
In this exercise you will choose **TWO** out of four functions to implement. Each function covers core string and array
manipulation skills in TypeScript. You'll get instant feedback via tests, and can also run your code with logs to aid
debugging.

---

## 📂 Project Structure

```
src
├── functions
│   ├── countOccurrences.ts
│   ├── findDuplicatePositions.ts
│   ├── findDuplicates.ts
│   └── symmetricDifference.ts
├── tests
│   ├── countOccurrences.spec.ts
│   ├── findDuplicatePositions.spec.ts
│   ├── findDuplicates.spec.ts
│   └── symmetricDifference.spec.ts
├── run.ts
└── testData.json
```

## 🔍 Functions

Pick any **two** of the following to implement:

1. ```ts
   /**
    * Counts the number of times a single character appears in a string (case-insensitive).
    * @param str The string to check
    * @param char The character to count
    * @returns The number of times the character appears in the string
    */
   export function countOccurrences(str: string, char: string): number {}
   ```

2. ```ts
   /**
    * Finds the positions of all duplicate numbers in an array.
    * @param arr The array to check for duplicates
    * @returns A map of all numbers that appear more than once in the array
    */
   export function findDuplicatePositions(arr: number[]): Record<number, number[]> {}
   ```

3. ```ts
   /**
    * Finds all duplicate characters in a string (case-sensitive)
    * @param str The string to check for duplicates
    * @returns An array containing all characters that appear more than once
    */
   export function findDuplicates(str: string): string[] {}
   ```

4. ```ts
   /**
    * Computes the symmetric difference of two arrays.
    * Returns all elements that appear in exactly one of the two arrays (but not in both).
    * @param arrayOne First array
    * @param arrayTwo Second array
    * @returns New array of elements that appear in exactly one of the two arrays (but not in both).
    */
   export function symmetricDifference(arrayOne: number[], arrayTwo: number[]): number[] {}
   ```

---

## 🚀 Getting Started

1. **Pick the TWO functions you would like to implement**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Implement your chosen functions** Edit the stub files in `src/functions`.

4. **Run tests for instant feedback** Each function has its own test script:

   ```bash
   npm run test:co   # countOccurrences
   npm run test:sd   # symmetricDifference
   npm run test:fd   # findDuplicates
   npm run test:fdp  # findDuplicatePositions
   ```

   These commands use Vitest to run only the tests for the function you're working on.

5. **View console logs (optional)** If you sprinkle `console.log` statements in your code, use the run scripts to see
   them in action:
   ```bash
   npm run start:co   # countOccurrences
   npm run start:sd   # symmetricDifference
   npm run start:fd   # findDuplicates
   npm run start:fdp  # findDuplicatePositions
   ```
   Test output is kept clean; logs appear only when you explicitly run via `run.ts`.

---

## 📊 Test Data

> All inputs and expected outputs live in `src/testData.json`. Inspect this file to understand boundary conditions and
> sample cases.

---

## 💡 Tips & Best Practices

- Embrace **TypeScript** types—define clear parameter and return types.
- Handle **edge cases** (empty strings/arrays, unexpected input).
- Keep functions **pure**; avoid side-effects.
- Write **clean, readable** code: small helpers and comments are welcome.
- Run tests **frequently** to confirm you're on the right track.

---

## 🙋🏻‍♂️ Questions

- Questions are welcome
- We are happy to talk through the problem with you

</div>
