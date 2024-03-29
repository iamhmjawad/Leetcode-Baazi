function findSecondLargest(array) {
    let largest = Number.MIN_SAFE_INTEGER
    let secondLargest = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest
            largest = array[i]
        } else if (array[i] > secondLargest && array[i] < largest) {
            secondLargest = array[i]
        }
    }
    return secondLargest
}

// Example usage
const array = [10, 5, 8, 12, 15, 6]
const secondLargest = findSecondLargest(array)
console.log("Second largest element:", secondLargest)
