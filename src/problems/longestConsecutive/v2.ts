function longestConsecutiveV2(nums: number[]): number {
  // if (nums.length === 0) return 0;
  // if (nums.length === 1) return 1;
  const set = new Set(nums);
  console.log(set);

  let longestSeries = 1;
  for (let num of set) {
    console.log(`  num: ${num}`);
    if (set.has(num - 1)) {
      continue;
    }

    let currSeries = 1;
    while (set.has(num + currSeries)) {
      console.log(`   Found consecutive: ${num + currSeries}`);
      currSeries++;
    }

    longestSeries = Math.max(longestSeries, currSeries);
  }
  return longestSeries;
}