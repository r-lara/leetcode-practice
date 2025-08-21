function maxArea(heights: number[]): number {
  let maxArea = 0
  for (let i = 0; i < heights.length - 1; i++) {
    const hLeft = heights[i]!;
    if (hLeft === 0) {
      continue;
    }
    for (let j = 1 + i ; j < heights.length; j++) {
      const hRight = heights[j]!;
      if (hRight === 0) {
        continue;
      }

      let x = j - i
      let y = Math.min(hLeft, hRight)
      maxArea = Math.max(maxArea, (x * y))
    }    
  }
  return maxArea
}