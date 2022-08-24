/**
 * @param {Array.<Number>} l1
 * @param {Array.<Number>} l2
 * @return {Array.<Number>}
 */
const addTwoNumbers = function (l1, l2) {
  const result = [];
  let remain = false;
  for (let index = 0; index < Math.max(l1?.length, l2?.length); index++) {
    const sum = (l1[index] ?? 0) + (l2[index] ?? 0) + (remain ? 1 : 0);
    result.push(sum % 10);
    remain = sum > 9 ? true : false;
  }
  if (remain) result.push(1);
  return result;
};
