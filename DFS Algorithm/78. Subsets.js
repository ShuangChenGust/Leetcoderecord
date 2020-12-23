dfs 题目如果画图回轻松理解一些。先写end 条件，然后判断dfs过程中遇见对情况，不断执行。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//       root
//     1                   []
// 1,2              1 []
// 1,2,3 | 1,2 [] | 1[] 3 | 1 [] []
var subsets = function(nums) {
    let res = [];
    function helper(list,index){
        if(index == nums.length){
            res.push(list.slice());
            return;
        }
        list.push(nums[index]);
        helper(list, index +1);
        list.pop();
        helper(list, index +1);
    }
    helper([], 0);
    return res;
};