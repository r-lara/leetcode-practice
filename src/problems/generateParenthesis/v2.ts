function generateParenthesisV2(n: number): string[] {
  let res = new Set<string>();
  const LIMIT = ((2 ** (2 * n) / 2));
  for (let i = 1; i < LIMIT; i += 2) {
    const binary = i.toString(2).padStart(2 * n, '0');
    // console.log(i, binary);
    let conv = '';
    let open = 0; 
    let close = 0; 
    for (let d of binary) {
      if (d === '0') {
        conv += '(';
        open++;
      } else {
        conv += ')';
        close++;
      }

      if (open > n) break;
      if (close > open) break;
    }

    if (conv.length === 2 * n) {
      res.add(conv);
      // console.log('conv', conv, '... added');
    }
  }
  return [...res];
}
