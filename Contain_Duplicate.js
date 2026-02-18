/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  for (let num of nums) {
    if (nums.indexOf(num) !== nums.lastIndexOf(num)) return true;
  }
  return false;
};
let nums = [2, 14, 18, 22, 22];
console.log(containsDuplicate(nums));
