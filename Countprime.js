// use martix to count prime: method1:
function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    var prime = new Array(N).fill(1);
    prime[0] = 0;
    prime[1] = 0;
    for(let i =2; i< N; i++){
        if(prime[i] === 1){
            for (let j = i + i; j< N; j = j+i){
                prime[j] = 0;
            }
        }
    }
    var semiprime = new Array(N).fill(0);
    // console.log(prime);
    for(let i = 0; i< prime.length; i++){
        if(prime[i] == 1){
            semiprime[i*2] = 1;
        }
    }
    
    console.log(semiprime);
    
    var result = [];
    var curr = 0;
    for(let i = 0; i< P.length; i++){
        let left = P[i];
        let right = Q[i];
        while(left<right){
            if(semiprime[left] != 0){
                curr++;
            }
            left++;
        }
        result.push(curr);
        curr = 0;
    }
    return result;
}


