def updateStudentGradeByCity(student_list, city, new_grades):
    city_students = filter(lambda student: student["location"] == city, student_list)
    
    updated_students = map(lambda student: 
                           {
                               "id": student["id"],
                               "firstName": student["firstName"],
                               "location": student["location"],
                               "grade": next((grade["grade"] for grade in new_grades if grade["studentId"] == student["id"]), "N/A")
                           }, 
                           city_students)
    
    return list(updated_students)
