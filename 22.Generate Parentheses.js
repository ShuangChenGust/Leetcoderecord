// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
//Brute Force:
// Js for loop: for (let a of array)
var generateParenthesis = function(n) {
    var res = [];
    var curr = new Array(2*n);
    generator(curr, 0, res);
    return res;
    // console.log(curr.length);
    
    function generator(current, pos, result){
        if(pos == current.length){
            if(valid(current)){
                res.push(current.join(""));
            }
        }
        else{
            current[pos] = "(";
            generator(current, pos+1, result);
            current[pos] = ")";
            generator(current, pos+1, result);
        }
    }
    
    function valid(current){
        let balance = 0;
        for (let char of current){
            if(char == "("){
                balance++;
            }
            else{
                balance--;
            }
            if(balance<0){
                return false;
            }
        }
        return balance == 0;
    }
};


Improvement:
