class Solution:
    def rome2int(self,rome):
        # dict for the match between rome and int;
        rome_int_dict = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
        rome_lst = list(map(lambda x:rome_int_dict[x],list(rome)))
        # print(rome_lst)
        # if len(rome_lst)==1:return rome_lst[0]
        # if len(rome_lst)>=2:
        #   if rome_lst[0]<rome_lst[1]:rome_lst[0]=-rome_lst[0]
        #   for i in range(1,len(rome_lst)-1):
        #     if rome_lst[i-1]>rome_lst[i] and rome_lst[i+1]>rome_lst[i]:
        #       rome_lst[i] = -rome_lst[i]
        print(rome_lst)
        # simplify the code
        for i in range(len(rome_lst)-1):  
          if rome_lst[i+1]>rome_lst[i]:rome_lst[i] = -rome_lst[i]

        print(sum(rome_lst))
        return sum(rome_lst)