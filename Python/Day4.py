# text = "PYTHON"
# for character in text:
#     print(character)
# print()

# vowel = input("Enter a String: ")
# count = 0
# for character in vowel:
#     if character in "aeiouAEIOU":
#         count += 1
# print("Number of vowels: ", count)
# print()

# string = input("Enter a string: ")
# reverse = ""
# for char in string:
#     reverse = char + reverse
# print("Reversed string: ", reverse)
# print()

# for i in range(1,21):
#     print(i)
# print()

# for i in range(2,51,2):
#     print(i)
# print()

# for i in range(10,0,-1):
#     print(i)
# print()

# while True:
#     user = int(input("Enter a number: "))
#     if user == 0:
#         break
#     print("you entered: ", user)
# print()

# for i in range(1,51):
#     if i % 5 == 0:
#         continue
#     print(i)
# print()

# for i in range(1,11):
#     if i == 5:
#         pass
#     print(i)
# print()

# for i in range(1,11):
#     print(i)
# else:
#     print("Loop finished successfully!")
# print()

# hello = "HELLO"
# for index, char in enumerate(hello):
#     print(index, char)
# print()

# sentence = input("Enter a Sentence: ")
# words = sentence.split()
# for position, word in enumerate(words, start = 1):
#     print(position,word)
# print()

# for i in range(1,11):
#     print("Multiplication Table of ", i)
#     for j in range(1,11):
#         print(i, "x", j, "=", i*j)

# while True:
#     print("Hello, World!")

# import time
# start_time = time.time()
# while True:
#     print("Loop is running...")
#     if time.time() - start_time >= 5:
#         break

# while True:
#     text = input("Enter Something: ")
#     if text == "exit":
#         break
#     print("You entered:", text)
# print()

i = 1
while i<=20:
    if i % 2 != 0:
        i += 1
        continue
    print(i)
    i += 1
print()

while True:
    num = int(input("Enter a number: "))
    if num < 0:
        continue
    if num > 0:
        break
    print("Positive number entered: ", num)
print()

i = 1
while i<=30:
    if i % 3 == 0:
        i += 1
        continue
    print(i)
    i += 1
print()

secret_number = 7
while True:
    guess = int(input("Enter a number between 1 to 10: "))
    if guess == secret_number:
        print("Correct!")
        break
    else:
        print("Wrong guess!")
print()

correct_password = "python123"
while True:
    password = input("Enter the password: ")
    if password == correct_password:
        print("Correct Password")
        break
    else:
        print("Wrong password")
    print()

correct_pin = "1234"
for attempt in range(3):
    pin = input("Enter your PIN: ")

    if pin == correct_pin:
        print("PIN correct. Access granted.")
        break
    else:
        print("Incorrect PIN.")

else:
    print("Account Locked")
print()

for i in range(10):
    pass
print()

for i in range(1,6):
    pass
print()

i=1
while i <=5:
    print(i)
    i += 1
else:
    print("Loop completed successfully")
print()

count = 0
while count < 5:
    word = input("Enter a word: ")
    if word == "Python":
        break
    count += 1
else:
    print("you never entered 'Python!'")



        