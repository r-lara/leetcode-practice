
function generateParenthesis(n: number): string[] {
  let stkOpen = [];
  let stkClose = [];
  for (let i = 0; i < n * 2; i++) {
    if (i < n) stkOpen.push('(')
    else stkClose.push(')')
  }

  let res = new Set<string>();
  const LIMIT = ((2 ** (2 * n) / 2));
  for (let i = 1; i < LIMIT; i += 2) {
    let conv = '';
    console.log(i, i.toString(2).padStart(2 * n, '0'));
    let open = [...stkOpen]; 
    let close = [...stkClose]; 
    for (let d of i.toString(2).padStart(2 * n, '0')) {
      let v;
      if (d === '0') v = open.pop();
      else v = close.pop();
      if (v === undefined) continue;
      conv += v;
    }

    // eval conv
    if (conv.length === 2 * n) {
      let valid = true;
      let count = 0;
      for (let p of conv) {
        if (p === '(') count++;
        if (p === ')') count--;
        if (count < 0) {
          valid = false;
          break;
        }
      }

      if (valid) {
        res.add(conv);
        console.log('conv', conv, '... added');
      }
    }
  }
  return [...res];
}
