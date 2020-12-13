/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let res = 0;
    let map = new Map();
    for(let e of employees){
        map.set(e.id, e);
    }
    let queue = [];
    queue.push(map.get(id));
    while(queue.length!=0){
        let employee = queue.shift();
        res += employee.importance;
        for(let n of employee.subordinates){
            queue.push(map.get(n));
        }
    }
    return res;
};