function isValid(str: string): boolean {
  let stack: string[] = [];
  
  for (let char of str) {
    if (['(','{','['].includes(char)) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (last === '(' && char === ')') continue;
      if (last === '[' && char === ']') continue;
      if (last === '{' && char === '}') continue;
      return false;
    }
  }
  return stack.length === 0
}

// const tests: {
//   skip?: boolean;
//   expect: any;
//   inputArgs: any[];
// }[] = [
//   {
//     expect: true,
//     inputArgs: ['()'],
//   },
//   {
//     expect: false,
//     inputArgs: ['('],
//   },
//   {
//     expect: false,
//     inputArgs: ['(('],
//   },
//   {
//     expect: true,
//     inputArgs: ['()[]{}'],
//   },
//   {
//     expect: false,
//     inputArgs: ['(]'],
//   },
//   {
//     expect: true,
//     inputArgs: ['([])'],
//   },
//   {
//     expect: false,
//     inputArgs: ['([)]'],
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
//   const result = isValid(test.inputArgs[0]!);
//   console.log(`  Expected:`, test.expect);
//   console.log(`  Result:`, result );
//   console.log(`  Valid: ${JSON.stringify(test.expect) === JSON.stringify(result) ? '✅' : '❌'}`);
// }
