/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a-b);
    let best = Infinity;
    for(let i =0; i< nums.length; i++){
        if( i>0 && nums[i] === nums[i-1]) continue;
        
        let left = i+1;
        let right = nums.length-1;
            while(right > left){
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(best- target)){
                best = sum;
            }
                
            if(sum < target){
                left++;
            }
            if(sum > target){
                right--;
            }
            if(sum === target) return target;
        }

    }
    return best;
};