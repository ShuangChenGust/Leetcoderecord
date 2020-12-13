// You are given a string S consisting of N characters and an integer K. You can modify string S by removing any substring of it. A substring is defined as a contiguous segment of a string.

// The goal is to find the shortest substring of S that, after removal, leaves S containing exactly K different characters.

// Write a function:

// function solution(S, K);

// that, given a non-empty string S consisting of N characters and an integer K, returns the length of the shortest substring that can be removed. If there is no such substring, your function should return −1.

// Examples:

// 1. Given S = "abaacbca" and K = 2, your function should return 3. After removing substring "cbc", string S will contain exactly two different characters: a and b.

// 2. Given S = "aabcabc" and K = 1, your function should return 5. After removing "bcabc", string S will contain exactly one character: a.

// 3. Given S = "zaaaa" and K = 1, your function should return 1. You can remove only one letter: z.

// 4. Given S = "aaaa" and K = 2, your function should return −1. There is no such substring of S that, after removal, leaves S containing exactly 2 different characters.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..1,000,000];
// string S consists only of lowercase letters (a−z);
// K is an integer within the range [0..26].

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// substring[first, end]
// substr[first, len]

// substring()
// 第一个参数代表开始位置,第二个参数代表结束位置的下一个位置;若参数值为负数,则将该值转为0;两个参数中,取较小值作为开始位置,截取出来的字符串的长度为较大值与较小值之间的差.

// substr()
// 第一个参数代表开始位置,第二个参数代表截取的长度

function solution(S, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let initialset = new Set(S);
  if (initialset.size < K) return -1;
  if (initialset.size == K) return 0;

  let left = 0;
  let right = S.length - 1;
  let ans = Infinity;
  for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j <= S.length; j++) {
      let set = new Set(S.substring(0, i) + S.substring(j, S.length));
      // console.log(set.size, i, j);
      if (set.size == K) {
        ans = Math.min(ans, j - i);
      }
    }
  }
  return ans;

  // console.log(S.substring(0,2) + S.substring(4,5));
  // console.log(S.substring(0,S.length));
  // let set = new Set(S.splice(0,1));
  // console.log(set);
}
