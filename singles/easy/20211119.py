class Solution:
    def reversed_int(self, x):
        if x > 2**31-1 or x < -2**31:
            return 0
        if x >= 0:
            return int(str(x)[::-1])
        else:
            return -int(str(x)[1:][::-1])

    def palindrome_num(self, x):
        if x < 0:
            return False
        reversed_x = self.reversed_int(x)

        if reversed_x == x:
            return True
        else:
            return False

    def roman2int(self, x):
        # use mod 10,5,100,500,1000...; and take care of 4;
        rom_int_dct = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'M': 1000, 'C': 100,
                       'D': 500
                       }
        #check whether x is correctly input; 
        sum = 0
        for i in range(len(x)):
            if x[i] or x[i+1] not in list(rom_int_dct.keys()):
                return 'wrong input'
            if i < len(x)-1:
                if rom_int_dct[x[i]] < rom_int_dct[x[i+1]]:
                    sum -= rom_int_dct[x[i]]
                else:
                    sum += rom_int_dct[x[i]]
            else:
                sum += rom_int_dct[x[i]]
        print(sum)

        if sum < 3999:
            return sum
        else:
            return None

    def longest_common_prefix(self,words:list)->str:
        common_prefix =''

        word_len = [len(word) for word in words]
        # the stupidest way to do this using for loop;
        for i in range(min(word_len)):
            tmp_prefix = words[0][i]
            for j, word in enumerate(words):
                if j < len(words) -1 :
                    if words[j][i] == words[1+j][i] == tmp_prefix:
                        continue
                    else:
                        tmp_prefix = ''
            common_prefix = common_prefix + tmp_prefix
        return common_prefix

        
        pass
    


if __name__ == '__main__':
    s = Solution()
    # res = s.reversed_int(-33200)
    # print(res)
    # res = s.palindrome_num(121212)
    # res = s.roman2int('MCMXCIVK')
    res = s.longest_common_prefix(["flower","flow","floight"])
    res = s.longest_common_prefix(["dog","racecar","car"])
    print(res)
