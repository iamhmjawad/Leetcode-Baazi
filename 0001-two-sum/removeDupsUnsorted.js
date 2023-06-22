function removeDuplicates(arr) {
    const hashmap = new Map()

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        if (!hashmap.has(arr[i])) {
            hashmap.set(arr[i], true)
        }
    }

    // Create a new array with unique elements
    const uniqueArr = Array.from(hashmap.keys())

    return uniqueArr
}

// Example usage
const inputArray = [1, 3, 2, 2, 4, 3, 5, 1]
const uniqueArray = removeDuplicates(inputArray)
console.log(uniqueArray)
