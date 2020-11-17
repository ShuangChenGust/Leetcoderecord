// Solution1 Map O(N):
var twoSum = function(nums, target) {
    const map = new Map();
    for( let i=0;i< nums.length;i++){
        const res = target - nums[i];
        
        if (map.has(res)){
            return [map.get(res),i];
        }
        map.set(nums[i], i);
    }
};

//Solution2: Brute force, forget it:
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[0];
    }
}
// SOlution3 : Two pointers, not recommend, very easy to make mistakes;

// solution2: double pointers:
var twoSum = function(nums, target) {
    let sortnums = [...nums];
    sortnums.sort((a,b)=>(a-b));
    let m = 0, n = 0;
    for(let i = 0, j = sortnums.length-1; i<j;){
        if(sortnums[i]+sortnums[j]< target){
            i++;
        }
        if(sortnums[i]+sortnums[j]> target){
            j--;
        }
        if(sortnums[i]+sortnums[j] == target){
            m = sortnums[i];
            n = sortnums[j];
            break;
        }
    }
    // console.log(nums);
    var res = [];
    for(let i = 0; i< nums.length; i++){
        if(nums[i] == m){
            res[0] = i;
            break;
        }
    };
    for(let k = 0; k< nums.length; k++){
        if(nums[k] == n && k!=res[0]){
            res[1] = k;
            break;
        }
    };
    return res;
};