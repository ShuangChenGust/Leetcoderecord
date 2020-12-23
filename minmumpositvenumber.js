/**
 * 最小数位和
 * 
 * 定义，表示在十进制下的各位数字和。
 *  现在给定一个x,请你求出最小正整数n，满足n在10进制下各位数字和小于 x 的最小值
 * 
 * 输入描述:第一行数据组数，对于每组数据，一行一个数字。
 * 输出描述:对于每组数据，一行一个整数表示最小的。
 */
 
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
var count = 0, result = []
rl.on('line', function (line) {
    if (count === 0)  {
        count = parseInt(line)
    } else {
        result.push(minNum(parseInt(line)))
        count--
        if (count === 0) {
            for (var i=0; i<result.length; i++) {
                console.log(result[i])
            }
            result = []
        }
    }
})
 
function minNum (sum) {
    var count = Math.floor(sum/9)
    var low = ''
    while (count) {
        low += '9'
        count--
    }
    var high = sum%9
    var res = (high === 0 ? '' : high.toString()) + low
    return res
}

Python Solution:

def minSum(num):
    x = num//9
    y = str(num%9)
    for i in range(x):
        y = y+'9'
    return int(y)
n=int(input())
for i in range(n):
    print(minSum(int(input())))