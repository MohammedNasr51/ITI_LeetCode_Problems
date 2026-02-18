/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let solution = [];
  aa:for (let i in nums) {
    for (let j in nums) {
      if (i == j) continue;
      if (nums[i] + nums[j] == target) {
        solution.push(+i, +j);
        break aa;
      }
    }
  }
  return solution;
};