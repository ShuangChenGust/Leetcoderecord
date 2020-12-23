辗转相除法之后，就开始实践这个算法在求解最大公约数上。
牛牛给小易出了一道不同寻常的求解最大公约数: 求解a和b的最大公约数，但是a和b的范围特别大。
小易遇到了困难，向聪明的你寻求帮助，希望你能帮帮他。

def hcf(a, b):
    a, b = min(a, b), max(a, b)
    if b % a == 0:
        return a
    else:
        return hcf(a, b % a)
 
a = int(input())
b = int(input())
print(hcf(a, b))