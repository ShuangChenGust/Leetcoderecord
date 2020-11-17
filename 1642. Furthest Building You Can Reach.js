//binary search solution:
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let len = heights.length;
    let left = 0;
    let right = len-1;
    let mid = -1, res = -1;
    while(left <= right){
        mid = Math.floor((left + right)/2);
        if(helper(mid, heights, bricks, ladders)){
            res = mid;
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return res;
    
    function helper(target, heights, bricks, ladders){
        if(target == 0) return true;
        //differ the array
        let differ = new Array(target);
        for(let i = 0; i< target; i++){
            differ[i] = heights[i+1] - heights[i];
        }
        differ.sort((a,b)=>(a-b));
        // console.log(differ);
        //from large to small
        for(let i = target-1; i >= 0 ; i--){
            if(ladders>0){
                ladders--;
                continue;
            }
            if(bricks >= differ[i]){
                bricks -= differ[i];
                continue;
            }
            else{
                return false;
            }
        }
        return true;
    }
};