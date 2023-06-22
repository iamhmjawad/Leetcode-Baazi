function pairwiseSwap(head) {
    if (!head || !head.next) {
        // Return if the list is empty or has only one node
        return head
    }

    const dummy = new Node(0)
    dummy.next = head
    let curr = dummy

    while (curr.next && curr.next.next) {
        const first = curr.next
        const second = curr.next.next

        // Swap the nodes
        first.next = second.next
        second.next = first
        curr.next = second

        // Move to the next pair
        curr = curr.next.next
    }

    return dummy.next
}
