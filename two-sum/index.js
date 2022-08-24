/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  const dict = {};
  for (let idx = 0; idx < numbers.length; idx++) {
    const com = target - numbers[idx];
    if (dict[numbers[idx]] !== undefined) return [dict[numbers[idx]], idx];

    dict[com] = idx;
  }
};
