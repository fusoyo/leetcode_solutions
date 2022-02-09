def solution(number):
    if number>2**31-1 or number<-2**31:return None

    
    if number>0:
        str_num = str(number)
        rev = int(str_num[::-1])
    else:
        return False
    if rev!=number:return False
    else:return True

print(solution(122881))