// this solution uses a map to keep trak of the numbers index, 
// then just check if the difference between the target and the current number exists in the map

function twoSum(numbers: number[], target: number): number[] {
  let map = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    map.set(numbers[i]!, i)
  }
  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i]!
    if (map.has(diff)) {
      return [i + 1, map.get(diff)! + 1]
    }
  }
  return [-1, -1]
}

// const tests: {
//   skip?: boolean;
//   expect: any;
//   inputArgs: any[];
// }[] = [
//   {
//     expect: [1,2],
//     inputArgs: [[2,7,11,15], 9],
//   },
//   {
//     // skip: false,
//     expect: [1,3],
//     inputArgs: [[2,3,4], 6],
//   },
// ]

// console.clear();
// for (let i = 0; i < tests.length; i++) {
//   const test = tests[i];
//   if (!test) continue;
//   const { skip = false } = test;
//   if (skip) continue;
  
//   console.log('\n');
//   console.log(`Test ${i + 1}:`);
//   const result = twoSum(test.inputArgs[0]!, test.inputArgs[1]!);
//   console.log(`  Expected:`, test.expect);
//   console.log(`  Result:`, result );
//   console.log(`  Valid: ${JSON.stringify(test.expect) === JSON.stringify(result) ? '✅' : '❌'}`);
// }