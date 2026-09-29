# colors = {
#     1: "Red",
#     2: "Blue",
#     3: "Green",
#     4: "Yellow",
#     5: "Purple"
# }
# for color in colors.values():
#     print(color)
# print()

# movies = set()
# movies.add("Avatar")
# movies.add("Titanic")
# movies.add("Inception")
# movies.add("Interstellar")
# movies.add("The Lion King")
# print("Favorite Movies:", movies)
# print()

# fruits = {"Apple", "Banana", "Mango", "Orange", "Grapes", "Papaya"}
# fruits.remove("Banana")
# fruits.discard("Watermelon")
# print("Final Set:", fruits)
# print()

# languages = {"Python", "Java", "C", "C++", "JavaScript"}
# language = input("Enter a programming language: ")
# if language in languages:
#     print(language, "exists in the set.")
# else:
#     print(language, "does not exist in the set.")
# print()

# even_numbers = {2, 4, 6, 8, 10}
# odd_numbers = {1, 3, 5, 7, 9}
# numbers = even_numbers.union(odd_numbers)
# print("Combined Set:", numbers)
# print()

# set1 = {2, 4, 6, 8, 10}
# set2 = {4, 8, 12, 16}
# common_elements = set1.intersection(set2)
# print("Common Elements:", common_elements)
# print()

# set_a = {1, 2, 3, 4, 5, 6}
# set_b = {4, 5, 6, 7, 8, 9}
# difference = set_a.difference(set_b)
# print("Difference (A - B):", difference)
# print()

# set1 = {1, 2, 3, 4, 5}
# set2 = {4, 5, 6, 7, 8}
# result = set1.symmetric_difference(set2)
# print("Symmetric Difference:", result)
# print()

# car_brands = {"Toyota", "BMW", "Honda", "Audi"}
# for brand in car_brands:
#     print(brand)
# print()

# numbers = [1, 2, 3, 2, 4, 5, 3, 6, 1, 5]
# unique_numbers = set(numbers)
# print("Unique Numbers:", unique_numbers)
# print()

# vowels = frozenset({'a', 'e', 'i', 'o', 'u'})
# print("Frozen Set:", vowels)
# vowels.add('x')
# print()

# print()
# prime_numbers = frozenset({2, 3, 5, 7})
# even_numbers = {2, 4, 6, 8, 10}
# intersection = prime_numbers.intersection(even_numbers)
# union = prime_numbers.union(even_numbers)
# print("Prime Numbers:", prime_numbers)
# print("Even Numbers:", even_numbers)
# print("Intersection:", intersection)
# print("Union:", union)
# print()

# words = {
#     "Apple",
#     "Book",
#     "Chair",
#     "River",
#     "Cloud",
#     "Garden",
#     "Laptop",
#     "Ocean",
#     "School",
#     "Flower"
# }
# count = len(words)
# print("Set:", words)
# print("Number of items:", count)
# print()

# student = {
#     "name": "Alice",
#     "age": 25,
#     "city": "New York"
# }
# print("Name using []:", student["name"])
# print("Age using []:", student["age"])
# print("Name using get():", student.get("name"))
# print("Age using get():", student.get("age"))
# print()

# student = {
#     "name": "Alice",
#     "age": 25,
#     "city": "New York"
# }
# result = student.get("phone", "Phone number not available")
# print("Phone:", result)
# print()

# student = {}
# student["name"] = "Alice"
# print("After adding name:", student)
# student["age"] = 25
# print("After adding age:", student)
# student["city"] = "New York"
# print("After adding city:", student)
# print()

# product = {
#     "name": "Laptop",
#     "price": 50000,
#     "stock": 10
# }
# print("Before Updating:", product)
# product["price"] = 55000
# product["stock"] = 15
# print("After Updating:", product)
# print()

# dict1 = {
#     "name": "Alice",
#     "age": 25
# }
# dict2 = {
#     "city": "New York",
#     "country": "USA"
# }
# dict1.update(dict2)
# print("Merged Dictionary:", dict1)
# print()

# student = {
#     "name": "Alice",
#     "age": 25,
#     "city": "Chennai",
#     "course": "Python",
#     "mark": 90
# }
# print("Original Dictionary:", student)
# del student["mark"]
# print("After removing mark:", student)
# del student["phone"]

print()
student = {
    "name": "Alice",
    "age": 25,
    "city": "Chennai"
}
removed_value = student.pop("age")
print("Removed Value:", removed_value)
print("Updated Dictionary:", student)
print()

student = {
    "name": "Alice",
    "age": 25,
    "city": "Chennai"
}
removed_item = student.popitem()
print("Removed Item:", removed_item)
print("Updated Dictionary:", student)
print()

student = {
    "name": "Alice",
    "age": 25,
    "city": "Chennai"
}
for key, value in student.items():
    print(key, ":", value)
print()

student = {
    "name": "Alice",
    "age": 25,
    "city": "Chennai"
}
for key in student.keys():
    print(key)
print()

student = {
    "name": "Alice",
    "age": 25,
    "city": "Chennai"
}
for value in student.values():
    print(value)
print()

students = {
    "student1": {
        "name": "Alice",
        "age": 20,
        "subjects": ["Python", "Maths", "English"]
    },
    "student2": {
        "name": "John",
        "age": 21,
        "subjects": ["Java", "Science", "English"]
    },
    "student3": {
        "name": "Emily",
        "age": 19,
        "subjects": ["Python", "Maths", "Science"]
    }
}
for student, details in students.items():
    print("\n", student)
    print("Name:", details["name"])
    print("Age:", details["age"])
    print("Subjects:", details["subjects"])
print()

students = {
    "student1": {
        "name": "Alice",
        "age": 20,
        "subject": "Python"
    },
    "student2": {
        "name": "John",
        "age": 21,
        "subject": "Java"
    },
    "student3": {
        "name": "Emily",
        "age": 19,
        "subject": "Maths"
    }
}
print("Using indexing:", students["student2"]["subject"])
print("Using get():", students.get("student2").get("subject"))
