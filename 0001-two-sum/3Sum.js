function threeSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] === target) {
                    return [i, j, k]
                }
            }
        }
    }
}

console.log(threeSum([3, 5, 8, 45], 53))