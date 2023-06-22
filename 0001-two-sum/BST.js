class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
}

function insertNode(root, value) {
    if (root === null) {
        // If the tree is empty, create a new node as the root
        return new Node(value)
    }

    if (value < root.value) {
        // If the value is less than the current node's value, insert it in the left subtree
        root.left = insertNode(root.left, value)
    } else if (value > root.value) {
        // If the value is greater than the current node's value, insert it in the right subtree
        root.right = insertNode(root.right, value)
    }
    return root
}

function searchNode(root, value) {
    if (root === null || root.value === value) {
        // If the node is null or its value matches the search value, return the node
        return root
    }

    if (value < root.value) {
        // If the search value is less than the current node's value, search in the left subtree
        return searchNode(root.left, value)
    } else {
        // If the search value is greater than the current node's value, search in the right subtree
        return searchNode(root.right, value)
    }
}



function findMin(root) {
    if (root === null) {
        return null
    }

    let current = root
    while (current.left !== null) {
        current = current.left
    }
    return current.value
}

function findMax(root) {
    if (root === null) {
        return null
    }

    let current = root
    while (current.right !== null) {
        current = current.right
    }
    return current.value
}

function findHeight(root) {
    if (root === null) {
        return -1
    }

    const leftHeight = findHeight(root.left)
    const rightHeight = findHeight(root.right)

    return Math.max(leftHeight, rightHeight) + 1
}


// Example usage:
const bst = new BST()
bst.root = insertNode(bst.root, 50)
bst.root = insertNode(bst.root, 30)
bst.root = insertNode(bst.root, 70)
bst.root = insertNode(bst.root, 20)
bst.root = insertNode(bst.root, 40)
bst.root = insertNode(bst.root, 60)
bst.root = insertNode(bst.root, 80)

console.log(searchNode(bst.root, 24))
console.log(findMin(bst.root))
console.log(findMax(bst.root))
console.log(findHeight(bst.root))