/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if(root === null) return 0;
    let queue = [];
    queue.push(root);
    let res;
    while(queue.length!= 0){
        let node = queue.shift();
        res = node.val;
        if(node.right){
            queue.push(node.right);
        }
        if(node.left){
            queue.push(node.left);
        }
    }
    return res;
};