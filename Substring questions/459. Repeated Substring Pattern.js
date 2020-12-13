var repeatedSubstringPattern = function (s) {
  let len = s.length;
  for (let i = 1; i * 2 <= len; i++) {
    if (len % i == 0) {
      let match = true;
      for (let j = i; j < len; j++) {
        if (s.charAt(j) != s.charAt(j - i)) {
          match = false;
          break;
        }
      }
      if (match) {
        return true;
      }
    }
  }
  return false;
};
