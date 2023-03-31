// var twoSum = function (nums, target) {
//     const sorted = [...nums].sort((a, b) => a - b);

//     // make two pointers at the start and at the end
//     let first = 0;
//     let last = sorted.length - 1;

//     // add the first and the last ptr,
//     for (let i = 0; i < nums.length; i++) {
//         // if sum === target, return indices
//         if (sorted[first] + sorted[last] === target) {
//             // return [first, last]
//             return [nums.indexOf(sorted[first]), nums.indexOf(sorted[last], nums.indexOf(sorted[first]) + 1)];
//         }

//         // if sum > target, last --
//         if (sorted[first] + sorted[last] > target) {
//             last--;
//         }
//         // else first ++
//         else {
//             first++;
//         }
//     }
// };

var twoSum = function(nums, target){
    let mp = new Map()
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i]
        if(mp.has(diff)){
            return [mp.get(diff),i]
        }
        mp.set(nums[i],i)
    }
}
