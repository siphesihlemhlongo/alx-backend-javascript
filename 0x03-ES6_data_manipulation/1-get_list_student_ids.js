def getListStudentIds(student_list):
    if not isinstance(student_list, list):
        return []
    
    student_ids = map(lambda student: student["id"], student_list)
    return list(student_ids)
