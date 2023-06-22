class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

function deleteNode(node) {
    if (node === null || node.next === null) {
        // Node is either null or the last node, cannot be deleted
        return
    }

    const nextNode = node.next
    node.data = nextNode.data
    node.next = nextNode.next
}

// Example usage
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

// Delete the node with data value 3
const nodeToDelete = head.next.next
deleteNode(nodeToDelete)

// Traverse the updated linked list
let current = head
while (current !== null) {
    console.log(current.data)
    current = current.next
}
