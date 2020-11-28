/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    let result = [];

    if(matrix.length <= 0 || matrix[0].length <= 0) return result;
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    let markAtlantic = new Array(rows);
    let markPacific = new Array(rows);
    
    for(let i =0; i< rows; i++){
        markAtlantic[i] = new Array(cols).fill(false);
        markPacific[i] = new Array(cols).fill(false);
    }
    
    // 横竖两条：
    for(let row =0; row< rows; row++){
        markPacific[row][0] = true;
        bfs(matrix, markPacific, row, 0);
        markAtlantic[row][cols-1] = true;
        bfs(matrix, markAtlantic, row, cols-1);
    }
    for(let col=0; col< cols; col++){
        markPacific[0][col] = true;
        bfs(matrix, markPacific, 0, col)
        markAtlantic[rows-1][col] = true;
        bfs(matrix, markAtlantic, rows-1, col);
    }
    // //remember the equal logic relationship;
    // console.log(markAtlantic[1,4]);
    // console.log(markPacific[1,4]);
    
    //fill the result matrix;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (markPacific[row][col] && markAtlantic[row][col]) {
            result.push([row, col]);
          }
        }
      }
      return result;
};


function bfs(matrix, marked, row, col){
    if(row>0 && !marked[row-1][col] && matrix[row-1][col] >= matrix[row][col]){
        marked[row-1][col] = true;
        bfs(matrix, marked, row-1, col);
    }
    if(col>0 && !marked[row][col-1] && matrix[row][col-1] >= matrix[row][col]){
        marked[row][col-1] = true;
        bfs(matrix, marked, row, col-1);
    }
    if(row< matrix.length-1 && !marked[row+1][col] && matrix[row+1][col] >= matrix[row][col]){
        marked[row+1][col] = true;
        bfs(matrix, marked, row+1, col);
    }
    if(col< matrix[0].length-1 && !marked[row][col+1] && matrix[row][col+1] >= matrix[row][col]){
        marked[row][col+1] = true;
        bfs(matrix, marked, row, col+1);
    }
};