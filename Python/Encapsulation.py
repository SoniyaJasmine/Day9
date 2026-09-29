class Employee():
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def display (self):
        print("Age:", self.__age)

    def get_name(self):
        return self.__name

    def set_age(self, age):
        self.__age = age

emp = Employee("Raja", 25)
emp.display()
print(emp.get_name())
emp.set_age(30)
emp.display()
# print(emp.__name)