// BFS solution:
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
 * @return {number[]}
 */
// // in java:
// offer，add 区别：

// 一些队列有大小限制，因此如果想在一个满的队列中加入一个新项，多出的项就会被拒绝。

// 这时新的 offer 方法就可以起作用了。它不是对调用 add() 方法抛出一个 unchecked 异常，而只是得到由 offer() 返回的 false。

// poll，remove 区别：

// remove() 和 poll() 方法都是从队列中删除第一个元素。remove() 的行为与 Collection 接口的版本相似， 但是新的 poll() 方法在用空集合调用时不是抛出异常，只是返回 null。因此新的方法更适合容易出现异常条件的情况。

// peek，element区别：

// element() 和 peek() 用于在队列的头部查询元素。与 remove() 方法类似，在队列为空时， element() 抛出一个异常，而 peek() 返回 null
var rightSideView = function(root) {
    if(!root) return [];
    const queue = [root];
    let res = [];
    while(queue.length != 0){
        let len = queue.length;
        for(let i = 0; i< len; i++){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            if(i == len-1) res.push(node.val);
        }
    }
    return res;
};