/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let m = board.length;
    if(m == 0) return [];
    let n = board[0].length;
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    function BFS(i, j){
        const queue = [];
        queue.push([i, j]);
        board[i][j] = "NO";
        // console.log(board);
        while(queue.length !=0){
            const [curX, curY] = queue.shift();
            for( let [dx, dy] of directions){
                const x = curX + dx;
                const y = curY + dy;
                if(x<0|| x == m || y<0 || y ==n ) continue;
                if(board[x][y] == "O"){
                    board[x][y] = "NO";
                    queue.push([x,y]);
                }
            }
        }
    }
    //from the outside:
    for(let i = 0; i< m; i++){
        for(let j = 0; j<n; j++){
            if(i == 0 || j ==0 || i == m-1 || j== n-1){
                if(board[i][j] =="O"){
                    BFS(i, j);
                }
            }
        }
    }
    //re paint the board
    for(let i = 0; i< m; i++){
        for(let j = 0; j<n; j++){
            if(board[i][j] == "NO") board[i][j] = "O";
            //注意是else 要不替换完又被换成x了
            else if(board[i][j] == "O") board[i][j] = "X";
        }
    }
    return board;
};