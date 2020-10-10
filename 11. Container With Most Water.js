/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    function calMax(height, left, right){
        if(right-left ===1) return Math.min(height[right], height[left]);
        let max = (right-left) * Math.min(height[right], height[left]);
        let temp = height[right] > height[left] ? calMax(height, left+1, right) :
        calMax(height, left, right-1);
        return Math.max(max, temp);
    }
    let i = 0;
    let j = height.length-1;
    return calMax(height, i, j);
};

//双指针
var maxArea = function(height) {
    let r = height.length-1;
    let l = 0;
    let ans = 0;
    while(r>l){
        let max = (r-l) * Math.min(height[r], height[l]);
        ans = Math.max(max, ans);
        if(height[r]> height[l]){
            l++;
        }else{
            r--;
        }
    }
    return ans;
};