
function generateParenthesisV3(n: number): string[] {
  let res: string[] = [];
  let stack: string[] = [];

  function addParenthesis(open: number, close: number, i: number) {
    // console.log(`${new Array(i).join('...')}[${stack}] addParenthesis(open: ${open}, close: ${close}, i: ${i})`);
    if (stack.length === 2 * n) {
      res.push(stack.join(''));
      return;
    }
    if (open < n) {
      stack.push('(');
      addParenthesis(open + 1, close, i + 1);
      stack.pop();
    }
    if (close < open) {
      stack.push(')');
      addParenthesis(open, close + 1, i + 1);
      stack.pop();
    }
  }

  addParenthesis(0,0,0);
  return res;
}
