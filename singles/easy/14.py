class Solution:
    def longest_common_prefix(self,s:list):
        s_len = list(map(lambda x:len(x),s))
        i = 0
        prev_state = False
        while flag:
          state = [0 for _ in range(len(s)-1)]
          for j in range(1,len(s)):
            if s[0][i] != s[j][i]:     
              flag = False
              break
            state[j-1] = 1
            print(state)
            
          if sum(state)==len(state):
            prev_state = True
            i+=1
          else:break
        return s[0][0:i] if prev_state else ''

