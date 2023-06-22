function middleNode(head) {
    let curr = head
    let slow = curr
    let fast = curr
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}