/**
 * @param {number[]} barcodes
 * @return {number[]}
 splice(index, 删除x个，插入元素)
 */
var rearrangeBarcodes = function(barcodes) {
    var map = new Map();
    for(let bar of barcodes){
        if(map.has(bar) == 0){
            map.set(bar, 1);
        }else{
            map.set(bar, map.get(bar)+1);
        }
    }
    // console.log(map);
    var arr = [...map].sort((a,b)=> b[1] - a[1]);
    var result = new Array(barcodes.length).fill(0);
    var t = 0;
    
    for(let i = 0; i< result.length; i= i+2){
        if(arr[t][1] == 0){
            t++;
        }
        result.splice(i, 1, arr[t][0]);
        arr[t][1]--;
    }
    for(let i = 1; i< result.length; i= i+2){
        if(arr[t][1] == 0){
            t++;
        }
        result.splice(i, 1, arr[t][0]);
        arr[t][1]--;
    }
    return result;
};