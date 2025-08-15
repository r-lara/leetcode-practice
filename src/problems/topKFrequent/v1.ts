function topKFrequent(nums: number[], k: number): number[] {
  const mapFreq = new Map<number, number>()

  // count frequency of each num
  for (const num of nums) {
    mapFreq.set(num, (mapFreq.get(num) ?? 0) + 1)
  }
    
  // create a bucket with nums by frequency
  let largestFreq: number = 0;
  const frecPositions = new Map<number, number[]>()
  for(const [num, freq] of mapFreq) {
    if (freq > largestFreq) {
      largestFreq = freq
    }
    frecPositions.set(freq, [...(frecPositions.get(freq) ?? []), num])
  }

  // build kNums from largestFreq down to 1
  const kNums: number[] = [];
  for (let freq = largestFreq; freq > 0; freq--) {
    if (!frecPositions.has(freq)) continue
    kNums.push(...frecPositions.get(freq)!)
    if (kNums.length >= k) break
  }

  return kNums
}


console.log('\n');
console.log('test 1: expect', [1,2]);
console.log(topKFrequent([3,2,2,1,1,1], 2));

console.log('\n');
console.log('test 2: expect', [3, 7, 10]);
console.log(topKFrequent([5,-3,9,1,7,7,9,10,2,2,10,10,3,-1,3,7,-9,-1,3,3], 3));

console.log('\n');
console.log('test 3: expect', [5]);
console.log(topKFrequent([5,5,5,5,5], 1));
