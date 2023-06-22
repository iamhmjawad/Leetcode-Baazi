function commonElements(arr1, arr2) {
    let commonSet = new Set()
    let common = []

    for (const iterator of arr1) {
        commonSet.add(iterator)
    }

    for (const iterator of arr2) {
        if (commonSet.has(iterator)) {
            common.push(iterator)
        }
    }
    return common
}

const array1 = [1, 2, 3, 4, 5]
const array2 = [4, 5, 6, 7, 8]
const common = commonElements(array1, array2)
console.log("Common elements:", common)