import { countOccurrences } from './functions/countOccurrences';
import { symmetricDifference } from './functions/symmetricDifference';
import { findDuplicates } from './functions/findDuplicates';
import { findDuplicatePositions } from './functions/findDuplicatePositions';
import testArguments from './testData.json';
import { objLog } from './utils/objLog';

const validFunctions = ['countOccurrences', 'symmetricDifference', 'findDuplicates', 'findDuplicatePositions'] as const;
type FunctionToCall = (typeof validFunctions)[number];

const args = process.argv.slice(2);

const functionToCall = args[0] as FunctionToCall;

if (!functionToCall || !validFunctions.includes(functionToCall)) {
  console.error('Invalid or no function provided. Must be one of:', validFunctions.join(', '));
  process.exit(1);
}

const printHeader = (functionName: string) => {
  console.log('----------------------------------------------------------------');
  console.log(functionName);
  console.log('----------------------------------------------------------------');
};

const printFooter = (isLast: boolean) => {
  console.log(
    isLast ? '----------------------------------------------------------------' : '--------------------------------'
  );
};

switch (functionToCall) {
  case 'countOccurrences':
    printHeader(countOccurrences.name);
    testArguments.countOccurrences.forEach(({ str, subString, result }, index) => {
      console.log(`case: #${index + 1} - countOccurrences("${str}", "${subString}")\n`);
      console.log('\nLogs:');
      const actual = countOccurrences(str, subString);
      console.log('\n');
      console.log('Actual:', actual);
      console.log('Expected:', result);
      printFooter(index + 1 === testArguments.countOccurrences.length);
    });
    break;
  case 'symmetricDifference':
    printHeader(symmetricDifference.name);
    testArguments.symmetricDifference.forEach(({ arrayOne, arrayTwo, result }, index) => {
      console.log(`case: #${index + 1} - symmetricDifference(${objLog(arrayOne)}, ${objLog(arrayTwo)})\n`);
      console.log('\nLogs:');
      const actual = symmetricDifference(arrayOne, arrayTwo);
      console.log('\n');
      console.log('Actual:', objLog(actual));
      console.log('Expected:', objLog(result));
      printFooter(index + 1 === testArguments.symmetricDifference.length);
    });
    break;
  case 'findDuplicates':
    printHeader(findDuplicates.name);
    testArguments.findDuplicates.forEach(({ str, result }, index) => {
      console.log(`case: #${index + 1} - findDuplicates("${str}")`);
      console.log('\nLogs:');
      const actual = findDuplicates(str);
      console.log('\n');
      console.log('Actual:', objLog(actual));
      console.log('Expected:', objLog(result));
      printFooter(index + 1 === testArguments.findDuplicates.length);
    });
    break;
  case 'findDuplicatePositions':
    printHeader(findDuplicatePositions.name);
    testArguments.findDuplicatePositions.forEach(({ arr, result }, index) => {
      console.log(`case: #${index + 1} - findDuplicatePositions(${objLog(arr)})`);
      console.log('\nLogs:');
      const actual = findDuplicatePositions(arr);
      console.log('\n');
      console.log('Actual:', objLog(actual));
      console.log('Expected:', objLog(result));
      printFooter(index + 1 === testArguments.findDuplicatePositions.length);
    });
    break;
}
