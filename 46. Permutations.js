DFS:
/**
 * @param {number[]} nums
 * @return {number[][]}
 
                  root(abc)
    level0      a(bc)  b(ac)   c(ab)
    
    level1   ab(c)  ac(b)| ba(c)  bc(a) |  ca(b) cb(a)
 
    level2       c     b     c       a       b       a
    Time complecity O(n!)
 DFS
 
 123/
 132/
 213/
 231/
 312
 321
 
 */
var permute = function(nums) {
    let res = [];
    let used = [];
    
    function dfs(path){
        if(path.length == nums.length){
            res.push(path.slice());
            return;
        }
        for(let n of nums){
            if(used[n]) continue;
            path.push(n);
            used[n] = true;
            dfs(path);
            path.pop();
            used[n] = false;
        }
    }
    dfs([]);
    return res;
};