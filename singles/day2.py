def solution(number):
    if number>2**31-1 or number<-2**31:return None

    
    if number>0:
        str_num = str(number)
        rev = str_num[::-1]
    else:
        str_num = str( abs(number))
        rev = '-'+ str_num[::-1]
    if int(rev) >2**31-1 or int(rev)<-2**31:return None
    else:return int(rev)

print(solution(-1230222))
