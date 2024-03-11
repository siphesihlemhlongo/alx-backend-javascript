def getStudentsByLocation(student_list, city):
    filtered_students = filter(lambda student: student["location"] == city, student_list)
    return list(filtered_students)
