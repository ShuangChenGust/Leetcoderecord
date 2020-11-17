/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */二叉树性质 左儿子节点index 2x 右儿子节点2x+1
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    if(!root) return true;
    const queue = [{node:root, index:1}];
    let count = 0;
    // console.log(queue);
    while(queue.length){
        const temp = queue.shift();
        let node = temp.node;
        let index = temp.index;
        if(index != ++count){
            return false;
        }
        node.left && queue.push({node:node.left, index: index*2});
        node.right && queue.push({node:node.right, index: index*2+1});
        console.log(queue);
    }
    return true;
};