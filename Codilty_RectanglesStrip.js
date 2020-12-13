// Task description
// There are N rectangles numbered from 0 to N-1. The K-th rectangle has size A[K] × B[K].

// We want to arrange as many rectangles as possible into a strip. The rectangles can be arranged into a strip if they all share a side of the same length (which becomes the height of the strip). Note that rectangles can be rotated.

// Write a function:

// function solution(A, B);

// that, given two arrays A and B of N integers each, returns the maximum number of rectangles that can be arranged into a strip.

// Examples:

// 1. Given A = [2, 3, 2, 3, 5] and B = [3, 4, 2, 4, 2], the function should return 3. Choosing the 0th, 2nd and 4th rectangles we can obtain the following strip of height 2 (note that the 0th rectangle was rotated):

// (3 × 2), (2 × 2), (5 × 2)

// We can also choose the 0th, 1st and 3rd rectangles to obtain a strip of height 3. Here we have rotated 1st and 3rd rectangles:

// (2 × 3), (4 × 3), (4 × 3)

// 2. Given A = [2, 3, 1, 3] and B = [2, 3, 1, 3], the function should return 2. We can choose the 1st and 3rd rectangles:

// (3 × 3), (3 × 3)

// 3. Given A = [2, 10, 4, 1, 4] and B = [4, 1, 2, 2, 5], the function should return 3. We can choose the 0th, 2nd and 4th rectangles to obtain a strip of height 4:

// (2 × 4), (2 × 4), (5 × 4)

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// arrays A and B both consist of N integers;
// each element of arrays A, B is an integer within the range [1..1,000,000,000].

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let c = [];
  for (let i = 0; i < A.length; i++) {
    c.push([A[i], B[i]]);
  }
  // console.log(c);

  let map = {};
  let max = 0;
  for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (!map[c[i][j]] && c[i][0] != c[i][1]) {
        map[c[i][j]] = 1;
        continue;
      }
      if (!map[c[i][j]] && c[i][0] == c[i][1]) {
        map[c[i][j]] = 1 / 2;
        continue;
      }
      // if(map[c[i][j]]){
      //     map[c[i][j]]++;
      // }
      if (map[c[i][j]] && c[i][0] != c[i][1]) {
        map[c[i][j]]++;
        if (map[c[i][j]] > max) {
          max = map[c[i][j]];
        }
      }
      if (map[c[i][j]] && c[i][0] == c[i][1]) {
        map[c[i][j]] = map[c[i][j]] + 1 / 2;
        if (map[c[i][j]] > max) {
          max = map[c[i][j]];
        }
      }
    }
  }
  return max;
}

// A better solution here:

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let arr = new Array(A.length);
  for (let i = 0; i < A.length; i++) {
    arr[i] = new Array(2);
  }
  for (let i = 0; i < A.length; i++) {
    arr[i][0] = A[i];
    arr[i][1] = B[i];
  }
  // console.log(arr);
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == arr[i][1]) {
      if (map[arr[i][0]]) {
        map[arr[i][0]]++;
      } else {
        map[arr[i][0]] = 1;
      }
    } else {
      arr[i].forEach((item) => {
        if (map[item]) {
          map[item]++;
        } else {
          map[item] = 1;
        }
      });
    }
  }
  // console.log(map);
  let res = Object.values(map);
  res.sort((a, b) => a - b);
  return res.slice(-1).pop();
}
