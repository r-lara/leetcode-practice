function twoSumV2(numbers: number[], target: number): number[] {
  let lPtr = 0;
  let rPtr = numbers.length - 1;

  for (let i = 0; i < numbers.length; i++) {
    const sum = numbers[lPtr]! + numbers[rPtr]!;
    if (sum === target) {
      return [lPtr + 1, rPtr + 1];
    } 
    if (sum < target) {
     lPtr++;
    } else { // target < sum
     rPtr--;
    }
  }
  return [-1, -1]
}