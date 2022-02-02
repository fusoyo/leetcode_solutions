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

can_sum(7,[2,3])