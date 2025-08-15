function productExceptSelfV2(nums: number[]): number[] {
  const n = nums.length;
  let result: number[] = new Array(n);
  let leftArr: number[] = new Array(n).fill(1);
  let rightArr: number[] = new Array(n).fill(1);

  // split the array into left and right products, we will init the first element of leftArr and last element of rightArr to 1
  // leftArr will hold the product of all elements to the left of the current index
  // rightArr will hold the product of all elements to the right of the current index
  // result will hold the product of all elements except the current index
  // ex: nums = [1,2,3,4]
  // result[0] = X * 2 * 3 * 4 = 24; leftArr = [1, 0, 0, 0] rightArr = [24, 12, 4, 1]
  // result[1] = 1 * X * 3 * 4 = 12; leftArr = [1, 1, 0, 0] rightArr = [ 0, 12, 4, 1]
  // result[2] = 1 * 2 * X * 4 =  8; leftArr = [1, 1, 2, 0] rightArr = [ 0, 12, 4, 1]
  // result[3] = 1 * 2 * 3 * X =  6; leftArr = [1, 1, 2, 6] rightArr = [ 0,  0, 4, 1]
  // eveything to the left of the current index (X) is multiplied by everything to the right of the current index

  for (let i = 1; i < n; i++) {
    leftArr[i] = leftArr[i - 1]! * nums[i - 1]!;
    rightArr[n - i - 1] = rightArr[n - i]! * nums[n - i]!;
  }

  for (let i = 0; i < n; i++) {
    result[i] = leftArr[i]! * rightArr[i]!;
  }
  
  return result;
};
