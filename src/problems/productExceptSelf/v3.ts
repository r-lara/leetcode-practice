function productExceptSelfV3(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = new Array(n);
  const leftArr: number[] = new Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    leftArr[i] = leftArr[i - 1]! * nums[i - 1]!;
  }
  console.log('nums', nums);
  console.log('leftArr', leftArr);
  
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    // rightArr[n - i - 1] = rightArr[n - i]! * nums[n - i]!;
    result[i] = leftArr[i]! * rightProduct
    rightProduct *= nums[i]!
  }
  
  return result;
};
