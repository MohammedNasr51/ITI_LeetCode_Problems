/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let sum = 0;
  let solution = [];
  let i = 0;
  let left = 0;
  let right = 0;
  if (nums.length == 3) {
    sum = nums.reduce((acc, el) => acc + el, 0);
    if (sum == 0) {
      solution.push(nums);
    }
  }
  for (; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    if (nums[i] > 0) break;
    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        if (
          solution.length > 0 &&
          solution.includes([nums[i], nums[left], nums[right]])
        ) {
          left++;
          right--;
          continue;
        }
        solution.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] == nums[left - 1]) left++;
        while (left < right && nums[right] == nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return solution;
};

console.log(threeSum([-100, -70, -60, 110, 120, 130, 160]));
