function maxAreaV3(heights: number[]): number {
  let maxArea = 0;
  let lPtr = 0;
  let rPtr = heights.length - 1;

  while (lPtr < rPtr) {
    const h = Math.min(heights[lPtr]!, heights[rPtr]!);
    maxArea = Math.max(maxArea, (rPtr - lPtr) * h); // rPtr - lPtr = x
    if (heights[lPtr]! > heights[rPtr]!) rPtr--;
    else lPtr++;
  }
  return maxArea;
}
