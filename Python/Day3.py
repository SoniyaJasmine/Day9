num1 = 10
num2 = 3
print("Sum :", num1 + num2)
print("Difference :", num1 - num2)
print("Product :", num1 * num2)
print("Quotient :", num1 / num2)
print("Remainder :", num1 % num2)
print()

abc1 = float(input("Enter the first number: "))
abc2 = float(input("Enter the second number: "))
if abc1 > abc2:
    print("The first number is greater than the second number.")
elif abc1 < abc2:
    print("The first number is smaller than the second number.")
else:
    print("The first number is equal to the second number.")
print()

a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))
a = a + b
b = a - b
a = a - b
print("After Swapping:")
print("First Number: ", a)
print("Second Number: ", b)
print()

year=int(input("Enter the Year: "))
if year % 4 == 0:
    print("It is a Leap Year")
else:
    print("It is not a Leap Year")
print()

a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))
c = int(input("Enter the third number: "))
if a >= b and a >= c:
    print("The largest number is ", a)
elif b >= a and b >= c:
    print("The largest number is ", b)
else:
    print("The largest number is ", c)
print()

radius = float(input("The Radius of the Circle = "))
area = 3.14 * radius
print("The area of the Circle = ", area)
print()

num = int(input("Enter a number: "))
if num == 0:
    print("The number is Zero.")
elif num > 0:
    print("The number is Positive")
else:
    print("The number is negative")
print()

age = int(input("Enter Your Age: "))
if age >= 18:
    print("You are Eligible to Vote.")
else:
    print("You are Not Eligible to Vote.")
print()

mark = int(input("Enter Your Mark : "))
if mark >= 90:
    print("Grade A")
elif mark >= 80 and mark >= 89:
    print("Grade B")
elif mark >= 70 and mark >= 79:
    print("Grade c")
elif mark >= 60 and mark >= 69:
    print("Grade D")
else:
    print("Fail")
print()

balance = 5000
amount = int(input("Enter the Withdraw Amount: "))
if amount > balance:
    print("Insufficient Balance")
else:
    withdraw = balance - amount
    print("Remaining balance: ", withdraw)
print()

divisible = int(input("Enter a number : "))
if divisible % 5 == 0 and divisible % 11 == 0:
    print("The number divisible by both 5 and 11.")
else:
    print("The number not divisible by both 5 and 11.")
print()

vowel = input("Enter a Single Character: ")
if vowel.lower() in "aeiou":
    print("It is a vowel.")
else:
    print("It is a consonant.")
print()

nums = int(input("Enter a number: "))
print("Even" if nums % 2 == 0 else "odd")







