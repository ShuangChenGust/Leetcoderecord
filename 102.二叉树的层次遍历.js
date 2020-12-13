*/
var levelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    let res = []
    while(queue.length > 0){
      let len = queue.length
      let arr = []
      while(len){
        let node = queue.shift()
        arr.push(node.val)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
        len--
      }
      res.push(arr)
    }
    return res
};
https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/yan-du-you-xian-sou-suo-by-shetia/