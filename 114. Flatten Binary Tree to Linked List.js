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
 * @return {void} Do not return anything, modify root in-place instead.
 
 // difference is that this pre-order traverse is put the node in to the list.
 */
var flatten = function(root) {
    const list = [];
    inorder(root, list);
    console.log(list);
    for(let i = 1; i< list.length; i++){
        const prev = list[i-1], curr = list[i];
        prev.left = null;
        prev.right = curr;
    }
    function inorder(root, list){
        if (root != null) {
            list.push(root);
            inorder(root.left, list);
            inorder(root.right, list);
        }
    }

};