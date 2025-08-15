
function isValidSudoku(board: string[][]): boolean {
  let rows = Array.from({ length: 9 }, () => new Set<string>());
  let cols = Array.from({ length: 9 }, () => new Set<string>());
  let boxes: Set<string>[][] = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Set<string>()));

  for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
    for (let colIdx = 0; colIdx < 9; colIdx++) {
      let value = board[rowIdx]![colIdx];
      if (value === '.') continue;

      if(rows[rowIdx]!.has(value!)) return false;
      if(cols[colIdx]!.has(value!)) return false;
      if(boxes[Math.trunc(rowIdx / 3)]![Math.trunc(colIdx! / 3)]!.has(value!)) return false;
      
      rows[rowIdx]!.add(value!);
      cols[colIdx]!.add(value!);
      boxes[Math.trunc(rowIdx / 3)]![Math.trunc(colIdx / 3)]!.add(value!)
    }
  }
  
  return true;
}


const tests = [
  {
    expect: true,
    inputArgs: [
      [
        ["1","2",".",".","3",".",".",".","."],
        ["4",".",".","5",".",".",".",".","."],
        [".","9","8",".",".",".",".",".","3"],
        ["5",".",".",".","6",".",".",".","4"],
        [".",".",".","8",".","3",".",".","5"],
        ["7",".",".",".","2",".",".",".","6"],
        [".",".",".",".",".",".","2",".","."],
        [".",".",".","4","1","9",".",".","8"],
        [".",".",".",".","8",".",".","7","9"]
      ]
    ]
  },
  {
    skip: false,
    expect: false,
    inputArgs: [
      [
        ["1","2",".",".","3",".",".",".","."],
        ["4",".",".","5",".",".",".",".","."],
        [".","9","1",".",".",".",".",".","3"],
        ["5",".",".",".","6",".",".",".","4"],
        [".",".",".","8",".","3",".",".","5"],
        ["7",".",".",".","2",".",".",".","6"],
        [".",".",".",".",".",".","2",".","."],
        [".",".",".","4","1","9",".",".","8"],
        [".",".",".",".","8",".",".","7","9"]
      ]
    ]
  },

]

for (let i = 0; i < tests.length; i++) {
  const test = tests[i];
  if (!test) continue;
  const { skip = false } = test;
  if (skip) continue;

  console.log('\n');
  console.log(`Test ${i + 1}:`);
  console.log(`  Expected:`, test.expect);
  const result = isValidSudoku(test.inputArgs[0]!)
  console.log(`  Result:`, result );
}