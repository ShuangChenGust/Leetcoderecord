/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 比如 midVal 为 19 ，则 midVal 大于等于矩阵中 k-5 个元素，它小于 k ，所以会 low = midVal + 1，low 为 20 ，high 会靠近 20 ，当 low 和 high 都为 20 时，midVal 为 20 ，此时 countInMatrix 返回 k+5-1 ，它大于 k，所以会 high = midVal - 1，high 为 19，high 比 low 小，退出循环，返回 low 20

比如 midVal 为 21，则 midVal 大于等于矩阵中 k+5-1 个元素，它大于 k ，所以会 high = midVal - 1，high 为 20，low 会靠近 20，当 low 和 high 都为 20，时，midVal 为 20 ，此时 countInMatrix 返回的也是 k+5-1，它大于 k，所以会 high = midVal - 1，high 为 19 ，high 比 low 小，退出循环，返回 low 20

比如 midVal 为 20，则 midVal 大于等于矩阵中 k+5-1 个元素，它大于 k，所以会 high = midVal - 1，high 为 19，此时 low 可能是 20 （low比 high 大，退出循环，返回 low 20），low 可能是 19 或 19 以下，则 low 会靠近 high 19，当它们俩都 19，midVal 为 19 ，此时 countInMatrix 返回 k-5，它小于 k，low = midVal + 1，low 变 20，比 high 大，退出，返回 low 20
 */
var kthSmallest = function(matrix, k) {
    function countX(matrix, midval){
        let count = 0;
        for(let i =0; i< n; i++){
            for(let j = 0; j< n; j++){
                if(matrix[i][j]<= midval){
                    count++;
                }
            }
        }
        return count;
    }
    let n = matrix.length;
    let low = matrix[0][0];
    let high = matrix[n-1][n-1];
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        let count = countX(matrix, mid);
        if(count<k){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return low;
};