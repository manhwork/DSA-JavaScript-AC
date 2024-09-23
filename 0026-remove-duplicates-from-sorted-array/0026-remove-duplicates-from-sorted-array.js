/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const set = new Set();
    let index = 0;

    for (let num of nums) {
        if (!set.has(num)) {
            set.add(num);
            nums[index] = num;
            index++;
        }
    }

    return set.size;
};
