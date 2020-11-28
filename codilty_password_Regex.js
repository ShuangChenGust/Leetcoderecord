// You would like to set a password for a bank account. However, there are three restrictions on the format of the password:

// it has to contain only alphanumerical characters (a−z, A−Z, 0−9);
// there should be an even number of letters;
// there should be an odd number of digits.
// You are given a string S consisting of N characters. String S can be divided into words by splitting it at, and removing, the spaces. The goal is to choose the longest word that is a valid password. You can assume that if there are K spaces in string S then there are exactly K + 1 words.

// For example, given "test 5 a0A pass007 ?xy1", there are five words and three of them are valid passwords: "5", "a0A" and "pass007". Thus the longest password is "pass007" and its length is 7. Note that neither "test" nor "?xy1" is a valid password, because "?" is not an alphanumerical character and "test" contains an even number of digits (zero).

// Write a function:

// function solution(S);

// that, given a non-empty string S consisting of N characters, returns the length of the longest word from the string that is a valid password. If there is no such word, your function should return −1.

// For example, given S = "test 5 a0A pass007 ?xy1", your function should return 7, as explained above.

// Assume that:

// N is an integer within the range [1..200];
// string S consists only of printable ASCII characters and spaces.
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

Match 方法： 匹配字母：(/[a-zA-Z]/g)
匹配数字+字母：pwd.match(/^[a-zA-Z0-9]*$/
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    var pwds = S.split(" ");
    var pwdLen = -1;
    pwds.forEach(function(pwd){
        if(pwd.match(/^[a-zA-Z0-9]*$/)){
            // console.log(pwd);
            if(pwd.length%2!=1)
              return;
            if(pwd.match(/[a-zA-Z]/g)){
                var chrCnt = pwd.match(/[a-zA-Z]/g).length;
            }else{
                var chrCnt = 0;
            }
            // var chrCnt = pwd.match(/[a-zA-Z]/g || '[]').length;
            if(chrCnt%2!=0)
              return;
            if (pwd.length > pwdLen)
               pwdLen = pwd.length;
          }
        });
   return pwdLen;
}