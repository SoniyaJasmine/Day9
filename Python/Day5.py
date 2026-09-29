def greet_user():
    print("Hello, User!")
greet_user()
print()

def calculate_sum(a,b):
    return a + b
result = calculate_sum(5,6)
print("Sum: ", result)
print()

def check_positive(num):
    
    if num > 0:
        return "Positive"
    else:
        pass

print(check_positive(10))
print(check_positive(-5))
print()

def find_max(a,b,c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c
result = find_max(10,20,3)
print("Maximum number: ", result)
print()

count = 10       # Global variable
def modify_count():
    global count
    count = 20    # Modifying the global variable

    local_count = 5   # Local variable
    print("Inside function - count:", count)
    print("Inside function - local_count:", local_count)
modify_count()
print("Outside function - count:", count)
print()

def modify_variable():
    message = "Local Scope"
    print("Inside function:", message)
modify_variable()
# print("Outside function: ", message)3
print()

def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)
num = int(input("Enter a number: "))
result = factorial(num)
print("Factorial: ", result)
print()

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
n = int(input("Enter n: "))
print("The ", n, "th Fibbonacci number is:", fibonacci(n))
print()

def sum_numbers(*args):
    return sum(args)
result = sum_numbers(10,20,30,40)
print("Sum:", result)
print()

def print_student_details(**kwargs):
    for key, value in kwargs.items():
        print(key, ":", value)
print_student_details(name="Soniya", age=27, grade="A")
print()

def apply_operation(func, a, b):
    return func(a,b)
result = apply_operation(lambda x,y: x+y, 10, 20)
print("Sum: ", result)
print()

def outer_function():
    def inner():
        return "Hello from Inner function"
    return inner()
result = outer_function()
print(result)
print()

number = [1,2,3,4,5]
result = list(map(lambda x:x*2, number))
print(result)
print()