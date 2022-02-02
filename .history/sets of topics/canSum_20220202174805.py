from math import remainder


def can_sum(tartget_sum, numbers):
    if(tartget_sum==0):
        return True
    if(tartget_sum<0):
        return False
    
    for num in numbers:
        remainder = tartget_sum - num
        if(can_sum(remainder, numbers)):
            return True
    
    return False

# print(can_sum(7,[2,3]))

def can_sum_memo(target_sum, numbers, memo={}):
    if(target_sum in memo):return memo[target_sum]
    if(target_sum==0):
            return True
    if(target_sum<0):
        return False
    
    for num in numbers:
        remainder = target_sum - num
        if(can_sum(remainder, numbers)):
            memo[target_sum] = True
            return True
    
    memo[target_sum] = False
    return False

print(can_sum_memo(8,[2,3]))