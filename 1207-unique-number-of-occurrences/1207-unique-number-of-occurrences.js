/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hash = new Map()
    for (const num of arr) {
        if (hash.has(num)) {
            hash.set(num, hash.get(num) + 1)
        }
        else {
            hash.set(num, 1)
        }
    }

    // get all the keys and push in array
    let occurences = []
    for (const [key, value] of hash) {
        occurences.push(value)
    }

    // if array contains all unique elements, return true, else false
    // sort the array, to make things super easy
    let sortedValues = occurences.sort((a, b) => a - b)
    for (let i = 1; i < sortedValues.length; i++) {
        if (sortedValues[i] === sortedValues[i - 1]) return false
    }
    return true
};