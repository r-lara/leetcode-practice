function maxAreaV2(heights: number[]): number {
  console.log(heights);
  let maxArea = 0
  let lPtr = 0;
  let rPtr = heights.length - 1;

  while (lPtr < rPtr) {
    let lHeight = heights[lPtr]!;
    if (lHeight === 0) {
      lPtr++;
      continue;
    }
    let rHeight = heights[rPtr]!;
    if (rHeight === 0) {
      rPtr--;
      continue;
    }

    const x = rPtr - lPtr;
    const y = Math.min(lHeight, rHeight);
    const area = x * y;
    console.log(`  x=${x}; y=${y}; area=${area};`);

    if (area > maxArea) {
      console.log(`     found new max area: area=${area};`);
      maxArea = area;
    }

    if (lHeight > rHeight) {
      rPtr--;
    } else {
      lPtr++;
    }
  }
  return maxArea;
}

// const tests: {
//   skip?: boolean;
//   expect: any;
//   inputArgs: any[];
// }[] = [
//   {
//     // skip: true,
//     expect: 49,
//     inputArgs: [[1,8,6,2,5,4,8,3,7]],
//   },
//   {
//     // skip: true,
//     expect: 1,
//     inputArgs: [[1,1]],
//   },
//   {
//     // skip: true,
//     expect: 8,
//     inputArgs: [[1,5,4,3,2,1,1,1,1]],
//   },
//   {
//     // skip: true,
//     expect: 0,
//     inputArgs: [[0,0,1]],
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
//   const result = maxArea(test.inputArgs[0]!);
//   console.log(`  Expected:`, test.expect);
//   console.log(`  Result:`, result );
//   console.log(`  Valid: ${JSON.stringify(test.expect) === JSON.stringify(result) ? '✅' : '❌'}`);
// }
