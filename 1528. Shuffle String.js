/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let res = "";
  for (let i = 0; i < indices.length; i++) {
    let index = indices.indexOf(i);
    res = res + s[index];
  }
  return res;
};
