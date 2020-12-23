Write a SQL query to get the nth highest salary from the Employee table.

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    SET N := N-1;
  RETURN (
      # Write your MySQL query statement below.
      select Salary from Employee group by Salary order by Salary DESC limit N, 1
  );
END

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.
      SELECT 
          DISTINCT e.salary
      FROM 
          employee e
      WHERE 
          (SELECT count(DISTINCT salary) FROM employee WHERE salary>e.salary) = N-1
  );
END
思路2：子查询
排名第N的薪水意味着该表中存在N-1个比其更高的薪水
注意这里的N-1个更高的薪水是指去重后的N-1个，实际对应人数可能不止N-1个
最后返回的薪水也应该去重，因为可能不止一个薪水排名第N
由于对于每个薪水的where条件都要执行一遍子查询，注定其效率低下
思路3：自连接
一般来说，能用子查询解决的问题也能用连接解决。具体到本题：

两表自连接，连接条件设定为表1的salary小于表2的salary
以表1的salary分组，统计表1中每个salary分组后对应表2中salary唯一值个数，即去重
限定步骤2中having 计数个数为N-1，即实现了该分组中表1salary排名为第N个
考虑N=1的特殊情形(特殊是因为N-1=0，计数要求为0)，此时不存在满足条件的记录数，但仍需返回结果，所以连接用left join
如果仅查询薪水这一项值，那么不用left join当然也是可以的，只需把连接条件放宽至小于等于、同时查询个数设置为N即可。因为连接条件含等号，所以一定不为空，用join即可。
注：个人认为无需考虑N<=0的情形，毕竟无实际意义。
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.
      SELECT 
          e1.salary
      FROM 
          employee e1 JOIN employee e2 ON e1.salary <= e2.salary
      GROUP BY 
          e1.salary
      HAVING 
          count(DISTINCT e2.salary) = N
  );
END

作者：luanhz
链接：https://leetcode-cn.com/problems/nth-highest-salary/solution/mysql-zi-ding-yi-bian-liang-by-luanz/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。