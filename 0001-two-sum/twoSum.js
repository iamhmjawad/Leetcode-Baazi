function twoSum(array, target) {
    let result = []
    let hashmap = {}

    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i]

        if (hashmap.hasOwnProperty(complement)) {
            result.push(hashmap[complement])
            result.push(i)
            break
        }

        hashmap[array[i]] = i
    }

    return result
}

// Example usage
const array = [2, 7, 11, 15]
const target = 9
const indices = twoSum(array, target)
console.log("Indices of the two numbers:", indices)
