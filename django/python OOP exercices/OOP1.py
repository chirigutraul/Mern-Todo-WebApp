class Dog():
    def __init__(self, nume_introdus, varsta):
        self.nume= nume_introdus
        self.varsta=varsta
        print("Am creat un caine")
    def bark(self):
        print("ham!")

d1 = Dog("john",3)
print(d1.nume)
print(d1.varsta)
d1.bark()

d2= Dog("scooby",4)
print(d2.nume)
print(d2.varsta)
