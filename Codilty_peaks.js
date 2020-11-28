// A non-empty array A consisting of N integers is given.

// A peak is an array element which is larger than its neighbors. More precisely, it is an index P such that 0 < P < N − 1,  A[P − 1] < A[P] and A[P] > A[P + 1].

// For example, the following array A:

//     A[0] = 1
//     A[1] = 2
//     A[2] = 3
//     A[3] = 4
//     A[4] = 3
//     A[5] = 4
//     A[6] = 1
//     A[7] = 2
//     A[8] = 3
//     A[9] = 4
//     A[10] = 6
//     A[11] = 2
// has exactly three peaks: 3, 5, 10.

// We want to divide this array into blocks containing the same number of elements. More precisely, we want to choose a number K that will yield the following blocks:

// A[0], A[1], ..., A[K − 1],
// A[K], A[K + 1], ..., A[2K − 1],
// ...
// A[N − K], A[N − K + 1], ..., A[N − 1].
// What's more, every block should contain at least one peak. Notice that extreme elements of the blocks (for example A[K − 1] or A[K]) can also be peaks, but only if they have both neighbors (including one in an adjacent blocks).

// The goal is to find the maximum number of blocks into which the array A can be divided.

// Array A can be divided into blocks as follows:

// one block (1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2). This block contains three peaks.
// two blocks (1, 2, 3, 4, 3, 4) and (1, 2, 3, 4, 6, 2). Every block has a peak.
// three blocks (1, 2, 3, 4), (3, 4, 1, 2), (3, 4, 6, 2). Every block has a peak. Notice in particular that the first block (1, 2, 3, 4) has a peak at A[3], because A[2] < A[3] > A[4], even though A[4] is in the adjacent block.
// However, array A cannot be divided into four blocks, (1, 2, 3), (4, 3, 4), (1, 2, 3) and (4, 6, 2), because the (1, 2, 3) blocks do not contain a peak. Notice in particular that the (4, 3, 4) block contains two peaks: A[3] and A[5].

// The maximum number of blocks that array A can be divided into is three.

// Write a function:

// function solution(A);

// that, given a non-empty array A consisting of N integers, returns the maximum number of blocks into which A can be divided.

// If A cannot be divided into some number of blocks, the function should return 0.

// For example, given:

//     A[0] = 1
//     A[1] = 2
//     A[2] = 3
//     A[3] = 4
//     A[4] = 3
//     A[5] = 4
//     A[6] = 1
//     A[7] = 2
//     A[8] = 3
//     A[9] = 4
//     A[10] = 6
//     A[11] = 2
// the function should return 3, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [0..1,000,000,000].

//注意Js语言里 / 不是整除 要用parseInt向下取整;
//在java中，如果两个运算数都是整数，那么除法运算符的运算结果也是整数，并且会省略一切小数点后的值（或者说是两个整数相除得到的商）。而取余运算符（%），则对应的是两个整数相除得到的余数。

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length < 3) {
        return 0;
    }
    
    var i = 0;
    var j = 0;
    var peaks = [];
    let N = A.length;
    
    for(i=1; i<A.length-1; i++) {
        if(A[i] > A[i-1] && A[i] > A[i+1]) {
            peaks.push(i);
        }
    }
    // console.log(peaks);
    
    for(let size = 1; size<= N; size++){
        if(N % size != 0) continue;
        
        let find = 0;
        let group = N / size;
        let check = true;
        //we need the index of peaks;

        for(let peak of peaks){
            // console.log(peak);
            if (parseInt(peak / size) > find){
                check = false;
                break;
            }
        //   console.log(peak)
            if(parseInt(peak/size) === find) find++;
        }
        // console.log(find, group);
        if(find != group){
            check = false;
        } 
        if(check){
            return group;
        }
        // console.log(group);
    }
    
    return 0;
}