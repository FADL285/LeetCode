class MinStack {
  #stack = [];
  #minStack = [];

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.#stack.push(val);
    if (this.#minStack.length) {
      const minVal = Math.min(val, this.#minStack.at(-1));
      this.#minStack.push(minVal);
    } else {
      this.#minStack.push(val);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    this.#stack.pop();
    this.#minStack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.#stack.at(-1);
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.#minStack.at(-1);
  }
}
