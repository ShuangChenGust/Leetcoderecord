// 设计一个uniqueify函数，可以根据用户自定义的 重复判定规则 进行数组元素去重，举个例子：
// 复制代码
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// 31
// 32
// 33
// 34
// 35
//情况一：
letarr0 = [1, 1, 1, 0, 5, 6];
uniqueify(arr0);
//输出：[1,0,5,6]

//情况二：
letarr1 = [
  { id: 1, name: "xx" },
  { id: 1, name: "xx" },
  { id: 2, name: "xx" },
  { id: 1, name: "xx" },
  { id: 1, name: "xx" },
];
uniqueify(arr1, (a) => a.id); //假如这里的去重规则依据为id
//输出：
[
  { id: 1, name: "xx" },
  { id: 2, name: "xx" },
];

//情况三：
letarr2 = [
  { name: "xx", sex: "male" },
  { name: "xx", sex: "female" },
  { name: "xx", sex: "male" },
  { name: "aa", sex: "male" },
  { name: "aa", sex: "male" },
];
uniqueify(arr2, (a) => a.name + a.sex); //假如这里的去重规则依据为名字和性别均相同，才算是相同
//输出：
[
  { name: "xx", sex: "male" },
  { name: "xx", sex: "female" },
  { name: "aa", sex: "male" },
];

function uniqueify(arr, cb) {
  let newArr = [];
  if (!cb) {
    //cb 不存在, 直接数组去重
    newArr = [...new Set(arr)];
  } else {
    // cb存在
    let obj = {};
    arr.forEach((item) => {
      if (!obj[cb(item)]) {
        obj[cb(item)] = item;
        newArr.push(item);
      }
    });
  }

  console.log(newArr);
}

// 题目描述
// 给定一个由非负整数填充的m x n的二维数组，现在要从二维数组的左上角走到右下角，请找出路径上的所有数字之和最小的路径。
// 注意：你每次只能向下或向右移动。
function minPathSum(grid) {
  // write code here
  var dp = [];
  var sum1 = 0;
  var sum2 = 0;
  var n = grid[0].length;
  var m = grid.length;
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
    sum1 += grid[i][0];
    dp[i][0] = sum1;
  }
  for (let i = 0; i < n; i++) {
    sum2 += grid[0][i];
    dp[0][i] = sum2;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
}
module.exports = {
  minPathSum: minPathSum,
};
