function deleteAtMid(head, position) {
    if (!head) {
        return null
    }

    if (position === 0) {
        // If deleting the head node, update the head
        const newHead = head.next
        head.next = null
        return newHead
    }

    let current = head
    let prev = null
    let count = 0

    while (current && count < position) {
        prev = current
        current = current.next
        count++
    }

    if (!current) {
        // If position exceeds the length of the list, return the original head
        return head
    }

    prev.next = current.next
    current.next = null

    return head
}