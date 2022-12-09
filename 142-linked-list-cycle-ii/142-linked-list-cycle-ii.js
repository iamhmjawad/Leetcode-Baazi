/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let node = head
    while(node){
        if (node.fuck) {
          //  delete node.visited
            return node
        }
        else{
            node.fuck = true
            node = node.next
        }
    }
    return node
}