var findTheLongestSubstring = function (s) {
  let res = 0;
  let obj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  function isEven() {
    //if even will return false, if all false means is even
    return !(
      obj["a"] % 2 ||
      obj["e"] % 2 ||
      obj["i"] % 2 ||
      obj["o"] % 2 ||
      obj["u"] % 2
    );
  }
  //if less than res, means useless so remove.
  for (let i = 0; i < s.length - res; i++) {
    // 构建新的子字符串时，需要将obj中各元音字母出现次数置为0
    Object.keys(obj).forEach((key) => (obj[key] = 0));
    for (let j = i; j < s.length; j++) {
      if (Object.keys(obj).includes(s.charAt(j))) {
        obj[s.charAt(j)]++;
      }
      if (isEven()) {
        res = j - i + 1 > res ? j - i + 1 : res;
      }
    }
  }
  return res;
};
