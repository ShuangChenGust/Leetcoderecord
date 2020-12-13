var isCousins = function(root, x, y) {
    let queue = [];
    queue.push(root);
    if(root.val === x || root.val ===y) return false;
    while(queue.length != 0){
        let len = queue.length;
        let count = 0;
        while(len){
            let node = queue.shift();
            if (node.val === x || node.val === y) {
                count++;
            }
            if(node.left!= null && node.right!= null && ((node.left.val == x && node.right.val == y )||node.left.val == y && node.right.val == x)){
                return false;
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            len--;
            // console.log(count);
        }
        if(count == 2) return true;
    }
    return false;
};
My posting:

作者：guschenwpi
链接：https://leetcode-cn.com/problems/cousins-in-binary-tree/solution/ceng-ci-bian-li-pan-duan-jie-he-ta-ren-de-si-xiang/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

两个结点的爹不同
两个结点在一层
因此想到广度优先
解决方法

遍历结点时 先看孩子是不是那两个 是就返回false 提前结束 无需遍历整个树
按层遍历 当发现一层中含有【x】,【y】两个结点 返回true 因为在此之前 已经判断过第一点了 无需遍历整个树
层次遍历停止条件： len-- = 0
 */
var isCousins = function(root, x, y) {
    let depthx = 0;
    let depthy = 0;
    let depth = 0
    let queue = [];
    queue.push(root);
    if(root.val === x || root.val ===y) return false;
    while(queue.length != 0){
        let len = queue.length;
        while(len-- > 0){
            let node = queue.shift();
            if(node.left!= null && node.right!= null && ((node.left.val == x && node.right.val == y )||node.left.val == y && node.right.val == x)){

    //         if(node.left!=null&&node.right!=null&&((node.left.val==x&&node.right.val==y)||node.left.val==y&&node.right.val==x)){
                return false;
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        console.log(queue);
        if(queue.find((a)=>a.val==y)&&queue.find((a)=>a.val==x)!=undefined) return true;
    }
    return false;
};