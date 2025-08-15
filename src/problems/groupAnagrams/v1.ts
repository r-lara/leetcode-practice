function groupAnagrams(strs: string[]): string[][] {
  const map: Map<number, string[]> = new Map()
  for (const str of strs) {
    const hash = hashStr(str)
    if (map.has(hash)) {
      map.get(hash)?.push(str)
      continue
    }
    map.set(hash, [str])
  }

  return [...map.values()]
}

function hashStr(str: string): number {
  let hash = 1
  const PRIME = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
  const PRIME_MOD = 134217701 // (1 << 59) - 27; to avoid overflow in large strings
  for (let i = 0; i < str.length; i++) {
    const charCode: number = str.charCodeAt(i) - 97 // 'a' is 97 in ASCII
    hash = (hash * PRIME[charCode]!) % PRIME_MOD
  }
  return hash
}

console.log('\n');
console.log('test 1', );
console.log(groupAnagrams(['act','pots','tops','cat','stop','hat']));

console.log('\n');
console.log('test 2', );
console.log(groupAnagrams(['x']));

