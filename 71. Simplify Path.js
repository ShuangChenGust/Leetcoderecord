/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var stack = [];
    var patharr = path.split("/");
    for(let i = 0; i<patharr.length; i++){
        if(patharr[i] == "" || patharr[i] ==".") continue;
        if(patharr[i] == "..") stack.pop();
        else stack.push(patharr[i]);
    }
    return "/" + stack.join("/");
};


// With Class:
class Stack {
    constructor() {
      this._data = []
    }
    push(e) {
      this._data.push(e)
    }
    pop() {
      return this._data.pop()
    }
    join(s) {
      return this._data.join(s)
    }
  }
  
  var simplifyPath = function (path) {
      const stack = new Stack() // 添加join方法
      const pathArr = path.split('/')
      for (const s of pathArr) {
          if (s === '' || s === '.') {
              continue;
          } else if (s === '..') {
              stack.pop()
          } else {
              stack.push(s)
          }
      }
      return '/' + stack.join('/')
  };
  
  作者：huxiaocheng
  链接：https://leetcode-cn.com/problems/simplify-path/solution/tu-jie-miao-dong-by-huxiaocheng-2/
  来源：力扣（LeetCode）
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。