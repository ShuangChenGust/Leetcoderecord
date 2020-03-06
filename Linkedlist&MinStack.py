- [x] 5. Linked List Cycle

 linked list: double 
Think of Tortoise (i.e.,fast runner) and Hare (i.e.,slow runner) algorithm.

- [x] 6. Min Stack

[::-1] 顺序相反操作
[-1] 读取倒数第一个元素
Or 的用法



Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.items = []
        self.min = []
        """       
    def push(self, x: int) -> None:
        self.items.append(x)
        self.min.append(x)
        if not self.min and x <= self.min[-1]:
            self.min.append(x)
      #Use or, not end      
        """
    def push(self, x: int) -> None:
        self.items.append(x)
        if not self.min or x <= self.min[-1]:
            self.min.append(x)

    def pop(self) -> None:
        if not self.items:
            return None
        items = self.items.pop()
        if items == self.min[-1]:
            self.min.pop()
            
        return items
        
    def top(self) -> int:
        if not self.items:
            return None
        return self.items[-1]
        
    def getMin(self) -> int:
        if not self.min:
            return None
        return self.min[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
