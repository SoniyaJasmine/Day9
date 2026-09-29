sentence = input("Enter a sentene: ")
words = sentence.lower().split()
frequency = {}
for word in words:
    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1
print("\nWord Frequency: ")
for word, count in frequency.items():
    print(word, ":", count)
print()

n = int(input("Enter the number of rows: "))
for i in range(1, n+1):
    for j in range(i):
        print("*", end="")
    print()
print()

tasks = []
while True:
    print("\n---To-Do List Manager---")
    print("1. Add Task")
    print("2. View Tasks")
    print("3. Remove Task")
    print("Type 'exit' to quit")
    choice = input("Enter your choice: ")
    if choice.lower() == "exit":
        print("Goodbye")
        break
    elif choice == "1":
        task = input("Enter a task: ")
        tasks.append(task)
        print("Task added successfully!")
    elif choice == "2":
        if len(tasks) == 0:
            print("No tasks available.")
        else:
            print("\nYour tasks: ")
            for i, task in enumerate(tasks, start=1):
                print(i, ".", task)
    elif choice == "3":
        if len(tasks) == 0:
            print("No tasks to remove.")
        else:
            print("\nYour tasks: ")
            for i, task in enumerate(tasks, start=1):
                print(i, ".", task)
            task_number = int(input("Enter the task number to remove: "))
            if 1<= task_number <= len(tasks):
                removed_task = tasks.pop(task_number - 1)
                print("Removed: ", removed_task)
            else:
                print("Invalid task number.")
    else:
        print("Invalid choice. Please try again.")
print()

balance = 10000

while True:
    print("\n--- Banking System ---")
    print("1. Deposit")
    print("2. Withdraw")
    print("Type 'quit' to exit")

    atm = input("Enter your choice: ")

    if atm.lower() == "quit":
        print("Thank you for using our banking system!")
        break

    elif atm == "1":
        amount = float(input("Enter deposit amount: ₹"))

        if amount > 0:
            balance += amount
            print("Amount deposited successfully.")
            print("Current balance: ₹", balance)
        else:
            print("Please enter a valid amount.")

    elif atm == "2":
        amount = float(input("Enter withdrawal amount: ₹"))

        if amount > 0:
            if amount <= balance:
                balance -= amount
                print("Amount withdrawn successfully.")
                print("Current balance: ₹", balance)
            else:
                print("Insufficient balance.")
                print("Current balance: ₹", balance)
        else:
            print("Please enter a valid amount.")

    else:
        print("Invalid choice. Please try again.")
