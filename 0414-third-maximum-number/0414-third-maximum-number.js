/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
//     making a set, getting only uniqe, then sorting desc, then making a resulting array
    const arr = Array.from(new Set(nums)).sort((a, b) => b - a);
//     if 3rd elemnt not exists, return 1st, else that 3rd
    return arr[2] === undefined ? arr[0] : arr[2]

};