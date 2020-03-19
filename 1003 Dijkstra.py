迪杰斯特拉算法(Dijkstra)是由荷兰计算机科学家狄克斯特拉于1959 年提出的，因此又叫狄克斯特拉算法。 是从一个顶点到其余各顶点的最短路径算法，解决的是有权图中最短路径问题。 迪杰斯特拉算法主要特点是从起始点开始，采用贪心的策略，每次遍历到始点距离最近且未访问过的顶点的邻接节点，直到扩展到终点为止。

Python中可以用如下方式表示正负无穷：

float("inf"), float("-inf")
map() 会根据提供的函数对指定序列做映射。

第一个参数 function 以参数序列中的每一个元素调用 function 函数，返回包含每次 function 函数返回值的新列表。

语法
map() 函数语法：

map(function, iterable, ...)

>>>def square(x) :            # 计算平方数
...     return x ** 2
...
>>> map(square, [1,2,3,4,5])   # 计算列表各个元素的平方
[1, 4, 9, 16, 25]
>>> map(lambda x: x ** 2, [1, 2, 3, 4, 5])  # 使用 lambda 匿名函数
[1, 4, 9, 16, 25]
撑：顶点(Vertex)类，和图(Graph)类。按照这一架构，Vertex类至少需要包含名称（或者某个代号、数据）和邻接顶点两个参数，前者作为顶点的标识，后者形成顶点和顶点相连的边，
相应地必须有访问获取和设定参数的方法加以包装。Graph类至少需要拥有一个包含所有点的数据结构（列表或者map等），
相应地应该有新增顶点、访问顶点、新增连接边等方法。当然，为了实现Dijkstra算法（一种基本的最短路径算法），除了可以在Graph类里增加一个执行Dijkstra算法的方法以外，
还需要在Vertex类里增加用于Dijkstra算法的一些参数：某一个顶点距离Dijkstra搜索起点的距离，以及一旦完成Dijkstra搜索需要回溯路径时，前驱顶点的信息。

# 信息读入
num_city, num_roads, cur_city, save_city = list(map(int, input().split()))
rescue = list(map(int, input().split()))
roads = [[] for _ in range(num_city)]
for _ in range(num_roads):
    a = list(map(int, input().split()))
    roads[a[0]].append((a[1], a[2]))
    roads[a[1]].append((a[0], a[2]))

# 定义几个变量
min_roads, max_rescue, min_distance = 0, 0, 99999
temp_distance, temp_rescue = 0, rescue[cur_city]
visited = {cur_city}

# 深度优先遍历的函数定义
def dfs(city):
    global save_city, temp_distance, min_distance, temp_distance, temp_rescue, min_roads, max_rescue, visited
    if city == save_city:# 判断是不是终点站并按需更新
        if temp_distance < min_distance:
            min_distance = temp_distance
            min_roads = 1
            max_rescue = temp_rescue
        elif temp_distance == min_distance:
            min_roads += 1
            if temp_rescue > max_rescue:
                max_rescue = temp_rescue
        return

    for next_city, distance in roads[city]:# 对这个城市的每一个邻居都走一遍dfs
        if next_city not in visited:
            visited.add(next_city)
            temp_distance += distance
            temp_rescue += rescue[next_city]
            dfs(next_city)
            temp_distance -= distance	# 这剩下三步都是用来回溯的
            temp_rescue -= rescue[next_city]
            visited.remove(next_city)

#开始dfs
dfs(cur_city)
# 打印结果
print(min_roads, max_rescue)


作者: 杨宇昊
链接: https://qsctech-sange.github.io/1003-Emergency
来源: 三个技术小站
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

def Dijkstra(Start, End, L1, L2, Graph):
    global Res1, Res2
    Max = float("inf")
    Distance = [Max] * L1[0]
    Visited = [False] * L1[0]
    Team = [-Max] * L1[0]
    RoadNum = [0] * L1[0]

    Distance[Start] = 0
    Team[Start] = L2[Start]
    RoadNum[Start] = 1

    for i in range(L1[0]):
        Min, Cur = Max, -1
        for j in range(L1[0]):
            if Visited[j] is False and Distance[j] < Min:
                Min = Distance[j]
                Cur = j
        if Cur == -1:
            Res1 = RoadNum[End]
            Res2 = Team[End]
            return
        Visited[Cur] = True
        for k in range(L1[0]):
            if Visited[k] is False and Graph[Cur][k] != Max and \
                    Distance[k] >= Distance[Cur] + Graph[Cur][k]:

                if Distance[k] > Distance[Cur] + Graph[Cur][k]:
                    RoadNum[k] = RoadNum[Cur]
                    Team[k] = Team[Cur] + L2[k]
                    Distance[k] = Distance[Cur] + Graph[Cur][k]

                else:
                    if Team[k] < Team[Cur] + L2[k]:
                        Team[k] = Team[Cur] + L2[k]
                    RoadNum[k] = RoadNum[k] + RoadNum[Cur]

    Res1 = RoadNum[End]
    Res2 = Team[End]


def main():
    Max = float("inf")
    Line1 = input()
    Line2 = input()
    Line1 = Line1.split(" ")
    Line1 = list(map(int, Line1))
    Line2 = Line2.split(" ")
    Line2 = list(map(int, Line2))

    Graph = [[Max for j in range(Line1[0])] for i in range(Line1[0])]

    for i in range(Line1[1]):
        LineTemp = input()

        LineTemp = LineTemp.split(" ")
        LineTemp = list(map(int, LineTemp))
        Graph[LineTemp[0]][LineTemp[1]] = LineTemp[2]
        Graph[LineTemp[1]][LineTemp[0]] = LineTemp[2]

    Dijkstra(Line1[2], Line1[3], Line1, Line2, Graph)
    print(Res1, Res2)


main()
