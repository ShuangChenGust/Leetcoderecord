1.travese the value;
for in method: for in is mainly used to acees the key of obj, while the for of loop is mainly used to access the value of the obj;

var obj = {a:1, b:2, c:3};

for( var prop in obj){
    console.log("obj." + prop + "=" + obj[prop])
}



travese the key;
var obj = {0:'a', 1:'b', 2:'c'};

console.log(Object.keys(obk)); //console:[0, 1, 2]