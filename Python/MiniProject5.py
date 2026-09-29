from functools import reduce


# 1. Calculate average using *args
def calculate_average(*args):
    return sum(args) / len(args)


# 2. Convert marks into grades using map() and lambda
def get_grade(marks):
    grades = list(map(
        lambda x: "A" if x >= 90 else
                  "B" if x >= 80 else
                  "C" if x >= 70 else
                  "F",
        marks
    ))
    return grades[0]


# 3. Store student details using **kwargs
def create_student(**kwargs):
    return kwargs


# 4. Filter students who passed
def find_passed_students(students):
    return list(filter(
        lambda student: student["grade"] != "F",
        students
    ))


# 5. Find highest score using reduce()
def find_highest_score(scores):
    return reduce(lambda a, b: a if a > b else b, scores)


# 6. Recursion to print first n students
def print_students(students, n, index=0):
    if index >= n or index >= len(students):
        return

    student = students[index]

    print(
        "Student:", student["name"],
        ", Age:", student["age"],
        ", Average Score:", student["average"],
        ", Grade:", student["grade"]
    )

    print_students(students, n, index + 1)


# Student marks
john_marks = [80, 85, 90]
emily_marks = [90, 95, 100]
david_marks = [65, 70, 68]
sarah_marks = [75, 80, 85]


# Calculate averages
john_avg = calculate_average(*john_marks)
emily_avg = calculate_average(*emily_marks)
david_avg = calculate_average(*david_marks)
sarah_avg = calculate_average(*sarah_marks)


# Convert averages into grades
john_grade = get_grade([john_avg])
emily_grade = get_grade([emily_avg])
david_grade = get_grade([david_avg])
sarah_grade = get_grade([sarah_avg])


# Create students using **kwargs
students = [
    create_student(name="John", age=16, average=int(john_avg), grade=john_grade),
    create_student(name="Emily", age=16, average=int(emily_avg), grade=emily_grade),
    create_student(name="David", age=17, average=int(david_avg), grade=david_grade),
    create_student(name="Sarah", age=16, average=int(sarah_avg), grade=sarah_grade)
]


# Print first n students using recursion
print_students(students, 4)


# Find passed students using filter()
passed = find_passed_students(students)

print("\nPassed Students:", [student["name"] for student in passed])


# Find highest score among all individual marks using reduce()
all_scores = john_marks + emily_marks + david_marks + sarah_marks

highest = find_highest_score(all_scores)

print("Highest Score:", highest)
print()

# Global variable
total_transactions = 0


class BankAccount:

    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    # Deposit method
    def deposit(self, amount):
        global total_transactions

        self.balance += amount
        total_transactions += 1

        print("Deposited:", amount)

    # Withdraw method
    def withdraw(self, amount):
        global total_transactions

        # Inner function to check withdrawal
        def can_withdraw():
            return amount <= self.balance

        if can_withdraw():
            self.balance -= amount
            total_transactions += 1
            print("Withdrawn:", amount)
        else:
            print("Insufficient balance")

    # Get balance
    def get_balance(self):
        return self.balance


# First-class function
def apply_interest(balance, interest_function):
    return interest_function(balance)


# Create account
account = BankAccount("Alice", 0)

print("Account Holder:", account.name)

# Deposit
account.deposit(500)

# Withdraw
account.withdraw(200)

# Display balance
print("Balance:", account.get_balance())


# Lambda function for transaction fee
transaction_fee = lambda amount: amount * 0.02

fee = transaction_fee(200)

print("Transaction Fee:", int(fee))


# First-class function example
interest_rate = lambda balance: balance * 0.05

interest = apply_interest(account.get_balance(), interest_rate)

print("Interest:", interest)

# Global transaction counter
print("Total Transactions:", total_transactions)