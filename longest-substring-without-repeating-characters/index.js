/**
 * @param {string} string
 * @return {number}
 */
const lengthOfLongestSubstring = (string) => {
  const map = {};
  let from = 0;

  return string.split("").reduce((max, char, index) => {
    // store the last seen index of this character in 'map'
    const lastSeenIndex = map[char];
    // check if this character already exists in current window
    const windowContainsCharacter = lastSeenIndex >= from;
    // update where from the window starts if necessary
    from = windowContainsCharacter ? lastSeenIndex + 1 : from;
    // store the last seen index of this character in 'map'
    map[char] = index;
    //  get the size of the window, accounting for 0-based indexing
    const windowSize = index - from + 1;
    //      return the biggest window size so far
    return Math.max(max, windowSize);
  }, 0);
};

// lengthOfLongestSubstring('pwwkew');
/**
 * ! Solving this problem using sliding window algorithm !
 */
