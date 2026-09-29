# greeting = "Hello, Python!"
# print(greeting)
# print()

# access = "PythonProgramming"
# print("First Character: ", access[0])
# print("Last Character: ", access[-1])
# print("Middle Character: ", access[len(access) // 2])
# print()

# string = "Python Developer"
# print(string[:6])
# print(string[7:]) 
# print(string[::-1])
# print()

# first = "Immutable"
# first[0] = "A"
# print(first)
# print()

# temp = "Temporary Strint"
# del temp
# print(temp)

slicing = "Hello, World!"
slicing = slicing[:7] + "Python!"
print(slicing)
print()

methods = "Python is Amazing!"
print(methods.upper())
print(methods.lower())
print(methods.title())
print(methods.replace("Amazing", "Powerful"))
print()

string = "Hello123"
print("Only alphabets:", string.isalpha())
print("Only digits:", string.isdigit())
print("Both letters and numbers:", string.isalnum() and not string.isalpha() and not string.isdigit())
print()

word1 = "Python"
word2 = "Programming"
result = word1 + " " + word2
print(result)
text = "Python!"
print(text * 5)
print()

name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(f"Hello, my name is {name} and I am {age} years old.")
print()

repalace = "I love Java!"
print(repalace.replace("Java", "Python"))
print()

counting = "banana"
print(counting.count("a"))
print()

reversing = "Python is fun"
word = reversing.split()
reversing_word = word[::-1]
result = " ".join(reversing_word)
print(result)