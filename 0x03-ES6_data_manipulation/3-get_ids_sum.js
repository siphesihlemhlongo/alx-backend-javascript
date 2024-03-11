from functools import reduce

def getStudentIdsSum(student_list):
    student_ids_sum = reduce(lambda x, student: x + student["id"], student_list, 0)
    return student_ids_sum
