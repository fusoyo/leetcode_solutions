"""
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
"""


class Solution:
    def isValid(self, s):
        while "{}" in s or "[]" in s or "()" in s:
            s = s.replace("()", "").replace("[]", "").replace("{}", "")
        return s == ""

    def isValid2(self,s):
        """utilize stack to record the left parentheses"""
        stack = []
        info = {'(':')','[':']','{':'}'}
        for i in range(len(s)):
            if s[i] in ['(','[','{']:
                stack.append(s[i])
            else:
                if len(stack) and info[stack[-1]] == s[i]:
                    stack.pop()
                else:
                    return False
        return True if len(stack)==0 else False

s = Solution()
print(s.isValid2('['))

