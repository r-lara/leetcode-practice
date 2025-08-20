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