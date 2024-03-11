def cleanSet(input_set, startString):
    result = ''
    for element in input_set:
        if element.startswith(startString):
            result += element[len(startString):] + '-'
    return result.rstrip('-')  # Remove the trailing '-' if it exists

# Test the function
input_set = {'apple', 'banana', 'apricot', 'orange', 'pear'}
startString = 'ap'
print(cleanSet(input_set, startString))  # Output: 'ple-ricot'
