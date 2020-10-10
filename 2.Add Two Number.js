// Solution1:
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode('head');
    var temp = node, sum, n = 0;
    while(l2 || l1){
        const n1 = l1? l1.val : 0;
        const n2 = l2? l2.val : 0;
        sum = n1 + n2 + n;
        temp.next = new ListNode (sum % 10);
        temp = temp.next;
        n = parseInt(sum/10);
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(n>0) temp.next = new ListNode(n);
    
    return node.next;
};

Solution2:
// 解题思路
// 一个比较直观的方法

// JSON解析ListNode为字符串
// 从字符串中提取出全部数字部分，反转后即为对应数字的字符串
// 使用BigInt操作数字，防止溢出
// 将相加后的结果转换为ListNode
// 代码

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let s1 = JSON.stringify(l1).match(/\d/g).reverse().join(''),
        s2 = JSON.stringify(l2).match(/\d/g).reverse().join('')

    sum = BigInt(s1)+BigInt(s2)

    return [...sum.toString()].reduce((acc,v)=>{return {val: v, next: acc}}, null)
