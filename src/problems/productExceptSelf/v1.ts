function productExceptSelf(nums: number[]): number[] {
  const productArr: number[] = new Array(nums.length)

  let zeroIndex = -1;
  let TOTAL_PRODUCT = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (zeroIndex !== -1) {
        // more than one zero, all products will be zero
        return new Array(nums.length).fill(0)
      }
      zeroIndex = i
      continue;
    }
    TOTAL_PRODUCT *= nums[i]!
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === zeroIndex) {
      productArr[i] = TOTAL_PRODUCT
      continue
    }
    if (zeroIndex !== -1) {
      productArr[i] = 0
      continue
    }
    productArr[i] = TOTAL_PRODUCT / nums[i]!
  }

  return productArr
}

console.log('\n');
console.log('test 1', );
console.log(productExceptSelf([1,2,3,4]));

console.log('\n');
console.log('test 2', );
console.log(productExceptSelf([-1,1,0,-3,3]));
