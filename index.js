// Problem #1: Frequency Counter Pattern

const solution = (nums) => {
  const freqCounter = {};
  let majorEl = nums.length / 2;

  for (let num of nums) {
    freqCounter[num] = (freqCounter[num] || 0) + 1;
  }

  for (let key in freqCounter) {
    if (freqCounter[key] > majorEl) {
      return key;
    }
  }
};
