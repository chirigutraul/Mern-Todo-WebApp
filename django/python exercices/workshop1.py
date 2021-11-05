# ex 1

# students = {}
# for i in range(10):
#     nume = input("introduceti numele studentilor:")
#     note = int(input("introduceti nota:"))
#     students[nume]=note
#print(students)

# ex 2

# numbers = [1, 3.4, -3, 5, 8, -10, -13, -2, 5, 20, -21]
# maximum = numbers[0]
# for i in numbers:
#     if i > maximum:
#         maximum = i
# print (maximum)

# ex 3

#A list that contains a number of dictionaries with students. Every dictionary should contain data about a certain student, 
# with keys: “name”, “age”, “grade”, and whatever you feel you need to add.
#The user should specify using input() the number of students from the list (the number of dictionaries). 
# You can add a new dictionary with list.append(dictionary_name).
#We’ll assume a student won’t appear twice in the list.
#Also ask for input regarding “name”, “age”, “grade” and the other attributes of the student.

students = []
numberOfStudents = int(input("number of students: "))
for i in range (numberOfStudents):
    i = {"name" : "a", "credits" : 0, "age" : 0, "grade" : 0}
    i["name"]= input ("name: ")
    i["credits"] = int(input("number of credits:"))
    i["grade"] = int(input("grade:"))
    i["age"] = int(input ("age:"))
    students.append(i)
print (students)
