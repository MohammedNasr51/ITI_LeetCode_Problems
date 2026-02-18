/**
 * @param {string[]} strs
 * @return {string[][]}
 * */

var groupAnagrams = function (strs) {
  let obj = {};
  strs.forEach((str) => {
    let objKey = str.split("").sort().join("");
    if (!obj[objKey]) obj[objKey] = [];
    obj[objKey].push(str);
  });
  return Object.values(obj);
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
