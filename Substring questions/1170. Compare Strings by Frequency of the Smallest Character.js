/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  let q1 = [];
  let q2 = [];
  Count(queries, q1);
  Count(words, q2);
  let res = [];

  // console.log(q1, q2);

  for (let x of q1) {
    let countres = 0;
    for (let y of q2) {
      if (x < y) {
        countres++;
      }
    }
    res.push(countres);
  }
  return res;

  function Count(targets, ans) {
    for (let target of targets) {
      let currnum = 0;
      for (let i = 0; i < target.length; i++) {
        let curr = findSmall(target);
        // console.log(curr);
        if (target[i] == curr) {
          currnum = currnum + 1;
        } else {
          continue;
        }
      }
      ans.push(currnum);
    }
    return ans;
  }

  function findSmall(str) {
    let min = "z";
    for (let i = 0; i < str.length; i++) {
      if (str[i] < min) {
        min = str[i];
      }
    }
    return min;
  }
};

//Easy solution:
var numSmallerByFrequency = function (queries, words) {
  let answer = [];
  queries.forEach((query) => {
    let count = 0;
    query = query.split("").sort().join("");
    words.forEach((word) => {
      word = word.split("").sort().join("");
      if (query.lastIndexOf(query[0]) < word.lastIndexOf(word[0])) {
        count++;
      }
    });
    answer.push(count);
  });
  return answer;
};
