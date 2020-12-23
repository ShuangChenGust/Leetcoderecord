public.java

public class consecutive {
    private static int count = 0;
    public static int getNumber(int N, int[][] array, int k){
        int min = Integer.MAX_VALUE;
        for(int i = 0 ; i < N; i++){
            for(int j = 0; j < N ; j++){
                if(array[i][j] != Integer.MIN_VALUE){
                    int old = array[i][j];
                    count = 0;
                    helper(array, i , j);
                    if(count == k){
                        min = Math.min(min, old);
                    }
                }
            }
        }
    }
    return (min == Integer.MAX_VALUE)? -1 : min;
}

private static void helper(int[][ array], int i, int j){
    if(i<0 || j<0 || i>=array.length || j>= array.length || array[i][j] == Integer.MIN_VALUE) return;
    array[i][j] = Integer.MIN_VALUE;
    count++;
    helper(array, i+1, j);
    helper(array, i-1, j);
    helper(array, i, j+1);
    helper(array, i, j-1);
    return count;
}

class ConsecutiveNum{
    int[] dx = {1,0,-1,0};
    int[] dy = {0,1,0,-1};
    public int consecutive(int[][] board, int k){
        int res = Integer.MAX_VALUE;
        for (int i = 0; i < board.length; i++){
            for (int j = 0; j < board[0].length; j++){
                if (board[i][j] == Integer.MIN_VALUE){
                    continue;
                }
                int num = board[i][j], count = helper(board, i, j);
                if (count == k && num < res){
                    res = num;
                }
            }
        }
        return res == Integer.MAX_VALUE ? -1 : res;
    }

    public int helper(int[][] board, int x, int y){
        int res = 1;
        int cur = board[x][y];
        board[x][y] = Integer.MIN_VALUE;
        for (int i = 0; i < 4; i++){
            int nextX = x + dx[i], nextY = y + dy[i];
            if (inbound(board, nextX, nextY) && cur == board[nextX][nextY]){
                res += helper(board, nextX, nextY);
            }
        }
        return res;
    }

    public boolean inbound(int[][] board, int x, int y){
        return x >= 0 && x < board.length && y >= 0 && y < board[0].length;
    }
}
