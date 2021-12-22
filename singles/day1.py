test_arr = [1,2,3,4,5]

def solution(arr, target):
    results = []
    for i in range(len(arr)):
        if target-arr[i] in arr and target-arr[i] not in results:
            results.append(arr[i])
            results.append(target-arr[i])
    print(results)
    return results

if __name__ == '__main__':
    results = solution(test_arr, 7)


