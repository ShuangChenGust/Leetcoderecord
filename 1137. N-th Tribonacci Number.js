/**
 * @param {number} n
 * @return {number}
 */
var cache = {};
var tribonacci = function(n) {
    //recurrsion
    if(n===0) return 0;
    if(n===1) return 1;
    if(n===2) return 1;
    if(cache[n]) return cache[n];
    let res = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
    cache[n] = res;
    return res;
    // }
    // DP:
    var dp = [0, 1, 1];
    for (let i =3; i<= n; i++){
        dp[i] = dp[i-1]+ dp[i-2]+ dp[i-3];
    }
    return dp[n];
};