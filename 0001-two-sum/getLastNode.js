function getLastNode(head) {
    let prev = null
    let curr = head
    while (curr) {
        prev = curr
        curr = curr.next
    }
    return prev
}