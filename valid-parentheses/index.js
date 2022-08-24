/**
 * @param {string} string
 * @return {boolean}
 */
const isValid = function (string) {
  const parentheses = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const stack = [];
  for (const char of string) {
    if (parentheses[char]) stack.push(parentheses[char]);
    else if (stack.pop() === char) continue;
    else return false;
  }
  return !stack.length;
};
