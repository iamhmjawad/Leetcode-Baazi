function countOccurrence(str) {
    let hashmap = {}

    for (let i = 0; i < str.length; i++) {
        if (hashmap.hasOwnProperty(str[i])) {
            hashmap[str[i]]++
        } else {
            hashmap[str[i]] = 1
        }
    }

    return hashmap
}

// Example usage
const inputString = "Hello, World!"
const occurrenceCount = countOccurrence(inputString)
console.log(occurrenceCount)
