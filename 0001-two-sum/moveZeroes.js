function moveZeroes(array) {
    let left = 0

    for (let right = 0; right < array.length; right++) {
        if (array[right] !== 0) {
            array[left++] = array[right]
        }
    }
    while (left < array.length) {
        array[left++] = 0
    }

    return array
}

console.log(moveZeroes([3, 0, 7, 4, 0, 2, 0, 0, 0, 5, 6]))