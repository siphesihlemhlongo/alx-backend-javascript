from array import array

def createInt8TypedArray(length, position, value):
    if position < 0 or position >= length:
        raise ValueError("Position outside range")
    
    typed_array = array('b', [0] * length)
    typed_array[position] = value
    return typed_array
