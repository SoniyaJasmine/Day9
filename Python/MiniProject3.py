import random

total = int(input("Enter your total bill amount: "))
if total >= 5000:
    discount = total * (20 / 100)
    print("Discount Applied: ", discount)
elif total >= 3000 and total <= 4999:
    discount = total * (10 / 100)
    print("Discount Applied: ", discount)
elif total >= 1000 and total <= 2999:
    discount = total * (5 / 100)
    print("Discount Applied: ", discount)
else:
    total < 1000
    print("No Discount")
print("Final Bill Amount: ", total + discount)
print()

choices = ["rock", "paper", "scissors"]
computer = random.choice(choices)
user = input("Enter your choice (rock, paper, scissors): ").lower()
print("Computer chose: ", computer)
if user == computer:
    print("It's a tie!")
elif user == "rock" and computer == "scissors":
    print("You win!")
elif user == "scissors" and computer == "paper":
    print("You win!")
elif user == "paper" and computer == "rock":
    print("You win!") 
else:
    print("Computer Wins!")

