function findUnion(arr1, arr2) {
    const unionSet = new Set()

    // Add elements from arr1 to the set
    for (const num of arr1) {
        unionSet.add(num)
    }

    // Add elements from arr2 to the set
    for (const num of arr2) {
        unionSet.add(num)
    }

    // Convert the set back to an array
    const unionArray = Array.from(unionSet)

    return unionArray
}

// Example usage
const array1 = [1, 2, 3, 4, 5]
const array2 = [4, 5, 6, 7, 8]
const union = findUnion(array1, array2)
console.log("Union:", union)
