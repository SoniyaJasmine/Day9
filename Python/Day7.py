# t = ("apple", "Banana", "Grapes", "Mango", "Orange")
# print(t)
# print()

# indexing = ("apple", "Banana", "Grapes", "Mango", "Orange")
# third = indexing[2]
# print("Third fruit: ", third)
# print("Length: ", len(third))
# print()

# access = (1, 2, 3, 4, 5)
# print(access[0])
# print(access[-1])
# print()

# t1 = (1, 2, 3, 4, 5)
# t2 = ("apple", "Banana", "Grapes", "Mango", "Orange")
# t = t1 + t2
# print(t)
# print()

# slicing = (1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
# print(slicing[2:7])
# print()

# num = (1, 2, 3, 4, 5)
# num_list = list(num)
# num_list[2] = 0
# num = tuple(num_list)
# print(num) 
# print()

# tup = (1, 2, 3, 4, 5)
# del tup
# print(tup)

# t = (1, 2, 2, 4, 1, 1, 4, 2, 1, )
# print(t.count(1))
# print()

# t1 = (3, 5, 7, 9)
# print("Maximum: ", max(t1))
# print("Minimum: ", min(t1))
# print("Sum: ", sum(t1))
# print()

# fruits_tuple = ("apple", "Banana", "Grapes")
# fruits_list = ["apple", "Banana", "Grapes"]
# fruits_tuple[0] = "Mango"
# fruits_list[0] = "Mango"
# print("Tuple: ", fruits_tuple)
# print("List: ", fruits_list)
# print()

num = (11, 22, 33, 44, 55)
inputer = int(input("Enter a number: "))
if inputer in num:
    print("Number exists in the tuple")
else:
     print("Number does not exist in the tuple")
print()

colors = ("Red", "Blue", "White", "Pink")
color1, color2, color3, color4 = colors
print(color1)
print(color2)
print(color3)
print(color4)
print()

names = ("Red", "Blue", "White", "Pink")
for name in names:
     print(name.upper())
print()

movies = ["Dude", "Leo", "Dragon", "Puli"]
print(movies)
print()

access = [1, 2, 3, 4, 5, 6, 7, 8]
print(access[1])
print(access[3])
print()

t = ["Apple", "Banana", "Grapes"]
t.append("Orange")
t.insert(1, "Pineapple")
t.append("Mango")
print(t)
print()

books = ["Harry Potter", "The Alchemist", "Python Basics", "Wings of Fire"]
books[2] = "Python Programming"
print(books)
print()

books = ["Harry Potter", "The Alchemist", "Python Basics", "Wings of Fire"]
books.remove("Python Basics")
print("After remove():", books)
del books[1]
print("After del:", books)
print()

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for num in numbers:
    if num % 2 == 0:
        print(num)
print()

names = ["John", "Alice", "David", "Priya"]
for name in names:
    print(name.upper())
print()

numbers = [1, 2, 3, 4, 5]
reversed_list = numbers[::-1]
print(reversed_list)
print()

students = [
    ["John", 85],
    ["Alice", 92],
    ["David", 78]
]
print("Alice's marks:", students[1][1])
print()

nested_list = [[1, 2], [3, 4], [5, 6]]
flat_list = []
for sublist in nested_list:
     for num in sublist:
         flat_list.append(num)
print(flat_list)
print()

numbers = [5, 2, 8, 1, 9, 3]
numbers.sort()
print("Ascending:", numbers)
numbers.sort(reverse=True)
print("Descending:", numbers)
print()

numbers = [25, 10, 45, 5, 30]
print("Maximum: ", max(numbers))
print("Minimum: ", min(numbers))
print()

numbers = [10, 20, 10, 30, 20, 40, 30]
unique_numbers = []
for num in numbers:
    if num not in unique_numbers:
        unique_numbers.append(num)
print("List without duplicates:", unique_numbers)