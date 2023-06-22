function calcRightSum(array) {
    let rightSum = []
    let totalSum = 0

    for (const num of array) {
        totalSum += num
    }

    let leftSum = 0

    for (let i = 0; i < array.length; i++) {
        leftSum += array[i]
        if (i === array.length - 1) {
            rightSum.push(array[i]) // Push last element to rightSum without subtracting
        } else {
            rightSum.push(totalSum - leftSum)
        }
    }

    return rightSum
}

console.log(calcRightSum([1, 2, 3, 4, 5]))
