/**
 * https://leetcode.com/problems/find-the-difference/submissions/
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const s1 = s.split('').sort();
    const s2 = t.split('').sort();
    let big = null;
    let small = null;


    if (s1.length > s2.length) {
        big = s1;
        small = s2;
    } else {
        big = s2;
        small = s1;
    }

    let answer = null;

    for (let i = 0; i < small.length; i++) {
        if (big[i] != small[i]) {
            answer = big[i]
            break;
        }
    }
    if (answer == undefined) {
        answer = big.join('').slice(-1);
    }
    return answer;
};