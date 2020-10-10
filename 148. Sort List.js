/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    //set the prehead;
    const dummy = new ListNode(0)
    dummy.next = head;
    let head0 = dummy.next;
    console.log(dummy);
    
    let fast = dummy;
    let slow = dummy;
    while (fast.next){
        fast = fast.next;
        slow = slow.next;
        fast.next && (fast = fast.next);
    }
    // if the slow list is equal to the quick list, it means the current list only has one node.
    if (slow === fast) return dummy.next;
    let rightList = slow.next;
    slow.next = null;
    //cut the mid point;
    let leftList = dummy;
    return merge(sortList(leftList.next), sortList(rightList));
};

var merge = function (leftList, rightList){
    const dummy = new ListNode(0);
    dummy.next = leftList;
    // console.log(dummy.next);
    let lNode = dummy;
    let rNode = rightList;
    
    while (lNode && rNode){
        while(lNode.next && lNode.next.val < rNode.val){
            lNode = lNode.next;
        }
        let rNext = rNode.next;
        rNode.next = lNode.next;
        lNode.next = rNode;
        rNode = rNext;
    }
    return dummy.next;
};