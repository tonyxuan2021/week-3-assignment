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

// Problem #2: Divide and Conquer Pattern

const binaryIterativeSearch = (nums, target) => {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (nums[middleIndex] === target) {
      return middleIndex;
    } else if (nums[middleIndex] < target) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return -1;
};
