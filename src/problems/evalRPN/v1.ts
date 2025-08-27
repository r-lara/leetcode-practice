function evalRPN(tokens: string[]): number {
  let stack = [];
  for (const val of tokens) {
      let x,y;
      if (val === '+') {
          y = stack.pop()
          x = stack.pop()
          stack.push(x + y)
      }
      else if (val === '-') {
          y = stack.pop()
          x = stack.pop()
          stack.push(x - y)
      }
      else if (val === '*') {
          y = stack.pop()
          x = stack.pop()
          stack.push(x * y)
      }
      else if (val === '/') {
          y = stack.pop()
          x = stack.pop()
          stack.push(Math.trunc(x / y))
      }
      else {
          stack.push(Number(val))
      }
  }
  return stack[0]
}