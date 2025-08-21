function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  console.log(nums);
  let triples: number[][] = []
  for (let i = 0; i < nums.length; i++) {
    console.log(`  loop nums[${i}]=${nums[i]}`);
    // skip if last number was evaluated
    if (i > 0 && nums[i] === nums[i - 1]) {
      console.log(`  - skip nums[${i}]=${nums[i]};`);
      continue
    }
    let l = i + 1; // as left pointer
    let r = nums.length - 1; // as right pointer
    while (l < r) {
      const sum = nums[i]! + nums[l]! + nums[r]!
      console.log(`    i:nums[${i}]=${nums[i]}; l:nums[${l}]=${nums[l]}; r:nums[${r}]=${nums[r]}; sum=${sum};`);
      if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      } else {
        triples.push([nums[i]!,nums[l]!,nums[r]!])
        console.log(`      found tripple [${nums[i]},${nums[l]},${nums[r]}];`);
        l++
        // if current value in pointer is same as last time; keep moving pointer to prevent duplicates
        // 1,2,2,3
        //   ^curr
        // 1,2,2,3
        //     ^move
        // 1,2,2,3
        //       ^move
        while (nums[l] === nums[l - 1] && l < r) {
          l++
        }
      }
    }
  }
  
  return triples
}

// const tests: {
//   skip?: boolean;
//   expect: any;
//   inputArgs: any[];
// }[] = [
//   {
//     // skip: true,
//     expect: [[-1,-1,2],[-1,0,1]],
//     inputArgs: [[-1,0,1,2,-1,-4]],
//   },
//   {
//     skip: true,
//     expect: [],
//     inputArgs: [[0,1,1]],
//   },
//   {
//     skip: true,
//     expect: [[0,0,0]],
//     inputArgs: [[0,0,0]],
//   },
//   {
//     skip: true,
//     expect: [[0,0,0]],
//     inputArgs: [[0,0,0,0]],
//   },
//   {
//     // skip: true,
//     expect: [[-2,0,2],[-2,1,1]],
//     inputArgs: [[-2,0,0,1,1,2]],
//   },
//   {
//     skip: true,
//     expect: [
//       [-10,5,5],
//       [-5,0,5],
//       [-4,2,2],
//       [-3,-2,5],
//       [-3,1,2],
//       [-2,0,2],
//     ],
//     inputArgs: [[2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]],
//   },
//   {
//     skip: true,
//     expect: [[-3,1,2]],
//     inputArgs: [[-3,3,4,-3,1,2]],
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
//   const result = threeSum(test.inputArgs[0]!);
//   console.log(`  Expected:`, test.expect);
//   console.log(`  Result:`, result );
//   console.log(`  Valid: ${JSON.stringify(test.expect) === JSON.stringify(result) ? '✅' : '❌'}`);
// }