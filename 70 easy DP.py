You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

# Brute Bruce: Cause func(n)= func(n-1) +Siuation(1) +func(n-2)+ situation(2)
        # if n < 3 :
        #     return n
        # else :
        #     return climbStairs(n-1) + climbStairs(n-2)
        # S1:
        # memo = {}
        # def calculate(n: int) -> int:
        #     if n < 3 :
        #         return n
        #     elif n not in memo:
        #         memo[n] = calculate(n-1) + calculate(n-2)
        #     return memo[n]
        # return calculate(n)
        # DP/ don't forget range() in loop:
        a,b = 1,2
        if n < 3:
            return n
        for i in range(2,n-1):
            a, b = b, a + b
        return a + b
