# Write your MySQL query statement below
select 
    t.name as Department,e.name as  Employee, t.maxsal as Salary
from 
    employee e,
    (select d.id,d.name,max(e.salary) as maxsal
    from employee e
    join department d
    on e.departmentid = d.id
    group by d.name,d.id) t

where 
    e.salary=t.maxsal 
and e.departmentid = t.id
