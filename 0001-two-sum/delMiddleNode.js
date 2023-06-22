function deleteMiddleNode(head) {
    let prev = null
    let curr = head
    let slow = curr
    let fast = curr
    while (fast.next && fast.next.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    prev.next = slow.next
    slow.next = null
    return head
}