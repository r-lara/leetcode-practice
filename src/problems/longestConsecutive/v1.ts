
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  const arr = Array.from(new Set(nums))
    .sort((a, b) => a - b);

  let longestSeries = 1;
  let currSeries = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1]! === (arr[i]! + 1)) {
      currSeries++;
    } else {
      currSeries = 1;
    }

    if (currSeries > longestSeries) {
      longestSeries = currSeries;
    }
  }
  return longestSeries;
}


// const tests: {
//   skip?: boolean;
//   expect: any;
//   inputArgs: any[];
// }[] = [
//   {
//     skip: true,
//     expect: 4,
//     inputArgs: [
//       [100,4,200,1,3,2]
//     ],
//   },
//   {
//     skip: true,
//     expect: 9,
//     inputArgs: [
//        [0,3,7,2,5,8,4,6,0,1]
//     ],
//   },
//   {
//     skip: false,
//     expect: 3,
//     inputArgs: [
//        [1,0,1,2]
//     ],
//   },
//   {
//     skip: false,
//     expect: 2,
//     inputArgs: [
//        [1,2,4]
//     ],
//   },
//   {
//     skip: true,
//     expect: 2,
//     inputArgs: [
//        [0,1]
//     ],
//   },
// ]

// console.clear();
// for (let i = 0; i < tests.length; i++) {
//   const test = tests[i];
//   if (!test) continue;
//   const { skip = false } = test;
//   // if (skip) continue;
  
//   console.log('\n');
//   console.log(`Test ${i + 1}:`);
//   const result = longestConsecutive(test.inputArgs[0]!)
//   console.log(`  Expected:`, test.expect);
//   console.log(`  Result:`, result );
//   console.log(`  Valid: ${JSON.stringify(test.expect) === JSON.stringify(result) ? '✅' : '❌'}`);
// }