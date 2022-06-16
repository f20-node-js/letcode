/**
 * https://leetcode.com/problems/add-strings/submissions/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function (num1, num2) {
    var cast1 = BigInt(num1);


    var cast2 = BigInt(num2);


    var answer = BigInt(cast1 + cast2);
    
    answer = answer.toString();


    return answer.toString();
};