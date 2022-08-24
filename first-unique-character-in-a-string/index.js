/**
 * @param {string} string
 * @return {number}
 */
const firstUniqChar = function (string) {
  const map = new Map();
  for (let index = 0; index < string.length; index++) {
    if (!map.has(string[index])) {
      map.set(string[index], index);
    } else {
      map.set(string[index], false);
    }
  }

  for (const value of map.values()) {
    if (value !== false) return value;
  }

  return -1;
};
