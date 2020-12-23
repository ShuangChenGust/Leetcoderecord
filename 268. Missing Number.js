// 1.位运算：如果相同就变0，最后生一个1:
var missingNumber = function (nums) {
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }
  return missing;
};

// 2.Hashtable：
var missingNumber = function (nums) {
  let set = new Set(nums);
  for (let i = 0; i <= nums.length; i++) {
    if (set.has(i)) {
      continue;
    } else {
      return i;
    }
  }
};
