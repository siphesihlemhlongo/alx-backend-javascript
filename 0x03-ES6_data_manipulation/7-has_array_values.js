def hasValuesFromArray(input_set, arr):
    for element in arr:
        if element not in input_set:
            return False
    return True
