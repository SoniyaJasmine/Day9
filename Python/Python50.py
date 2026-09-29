text = input("Enter a string: ")
reverse = " "
for char in text:
    reverse = char + reverse
print("Reversed string: ", reverse)
print()

num = int(input("Enter a number: "))
if num % 2 == 0:
    print("Even")
else:
    print("Odd")
print()

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
c = int(input("Enter third number: "))
if a >= b and a >= c:
    largest = a
elif b >= a and b >= c:
    largest = b
else:
    largest = c
print("Largest:", largest)
print()

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
c = int(input("Enter third number: "))
if a <= b and a <= c:
    smallest = a
elif b <= a and b <= c:
    smallest = b
else:
    smallest = c
print("Smallest:", smallest)
print()

numbers = [10,25,30,50,18]
larger = numbers[0]
for num in numbers:
    if num > larger:
        larger = num
print("Largest number: ", larger)
print()

numbers = [10,25,30,50,18]
smaller = numbers[0]
for num in numbers:
    if num < smaller:
        smaller = num
print("Smallest number: ", smaller)
print()

numbers = [10,25,30,50,18]
unique_numbers = list(set(numbers))
unique_numbers.sort()
print("Second largest: ", unique_numbers[-2])

numbers = [10,25,30,50,18]
unique_numbers = list(set(numbers))
unique_numbers.sort()
print("Second smallest: ", unique_numbers[1])

numbers = [10, 20, 10, 30, 20, 40, 30]
unique_numbers = []
for num in numbers:
    if num not in unique_numbers:
        unique_numbers.append(num)
print("List without duplicates:", unique_numbers)
print()

numbers = [10, 20, 10, 30, 20, 40, 30]
duplicate = []
for num in numbers:
    if numbers.count(num) > 1 and num not in duplicate:
        duplicate.append(num)
print("Duplicate elements:", duplicate)


    



