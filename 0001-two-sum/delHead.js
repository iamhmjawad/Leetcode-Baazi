function deleteAtHead(head) {
    if (!head) {
        return null
    }

    const newHead = head.next
    head.next = null

    return newHead
}