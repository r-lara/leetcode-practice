class MinStack {
  private stack = [];
  private minStack = [];
  constructor() {}

  push(val: number): void {
      this.stack.push(val);
      if (this.minStack.length === 0) {
          this.minStack.push(val)
      } else {
          this.minStack.push(Math.min(val, this.getMin()))
      }
  }

  pop(): void {
      this.minStack.pop()
      this.stack.pop()
  }

  top(): number {
      return this.stack[this.stack.length -1]
  }

  getMin(): number {
      return this.minStack[this.minStack.length - 1]
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/