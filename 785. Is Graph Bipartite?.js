/**
 * @param {number[][]} graph
 * @return {boolean}
 graph 每一个位置显示的是链接节点
 */
var isBipartite = function(graph) {
    const visited = new Array(graph.length);
    for(let i = 0; i< graph.length; i++){
        if(visited[i]){
            continue;
        }
        const queue = [i]; //推入顶点
        visited[i] = 1;
        while(queue.length){
            const cur = queue.shift();
            const curcolor = visited[cur];
            const neighborColor = -curcolor;
            for (let i = 0; i < graph[cur].length; i++) {      // 给他们都上色
                const neighbor = graph[cur][i];
                if (visited[neighbor] == undefined) {            // 还没上色
                  visited[neighbor] = neighborColor;             // 上色
                  queue.push(neighbor);                          // 并推入队列
                } else if (visited[neighbor] != neighborColor) { // 上了不对的颜色
                  return false;
                }
            }
        }
    }
    return true;
};