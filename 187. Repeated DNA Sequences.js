var findRepeatedDnaSequences = function (s) {
  // let left = 0;
  // let right = 10;
  let curr = "";
  let res = [];
  for (let i = 0; i < 10; i++) {
    curr = curr + s[i];
  }
  let set = new Set(curr);
  // console.log(set);
  let pointer = 9;
  while (pointer < s.length) {
    if (set.has(curr) && res.indexOf(curr) == -1) {
      res.push(curr);
    } else {
      set.add(curr);
    }
    pointer++;
    curr = curr.substr(1);
    curr = curr + s[pointer];
  }
  return res;
};
