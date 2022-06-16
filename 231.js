/**
 * https://leetcode.com/problems/power-of-two/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    const a = Math.log2(n);
    const b = parseInt(a);

    let answer = null;
    a - b == 0 ? answer = true : answer = false;

    return answer;

};