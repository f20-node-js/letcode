/**
 * https://leetcode.com/problems/single-number/submissions/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ar = [];
    let answer = null;

    if (nums.length == 1) {
        answer = nums[0];
        return answer;
    };

    for (let i = 0; i < nums.length; i++) {
        ar[i] = 0;
    }

    for (let i = 0; i < nums.length; i++) {
        for (let k = 0; k < nums.length; k++) {
            if (nums[i] == nums[k]) {
                ar[i]++;
            }

        }

    }
    const index = ar.indexOf(1);
    answer = nums[index];
    return answer;
};