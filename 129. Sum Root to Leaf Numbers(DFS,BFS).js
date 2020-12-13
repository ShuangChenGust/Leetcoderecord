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
var sumNumbers = function (root) {
  //     return dfs(root, 0);

  //     function dfs(node, sum){
  //         if(node == null){
  //             return 0;
  //         }
  //         let newsum = sum*10 + node.val;

  //         if(!node.left && !node.right){
  //             return newsum;
  //         }else{
  //             return dfs(node.left, newsum) + dfs(node.right, newsum);
  //         }
  //     }
  //BFS:
  if (root == null) return 0;
  let nodequeue = [];
  let numqueue = [];
  nodequeue.push(root);
  numqueue.push(root.val);
  let sum = 0;
  while (nodequeue.length != 0) {
    let node = nodequeue.shift();
    let num = numqueue.shift();
    if (!node.left && !node.right) {
      sum += num;
    } else {
      if (node.left != null) {
        nodequeue.push(node.left);
        numqueue.push(num * 10 + node.left.val);
      }
      if (node.right != null) {
        nodequeue.push(node.right);
        numqueue.push(num * 10 + node.right.val);
      }
    }
  }
  return sum;
};
