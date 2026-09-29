name = input("Enter your full name: ")
age = input("Enter your age: ")
quote = input("Enter your favorite quote: ")
name = name.title()
age = str(age)
quote = quote.upper()
print("\nUser Profile:")
print("-------------------------")
print(f"Name : {name}")
print(f"Age : {age}")
print(f'Favorite Quote : "{quote}"')
print()

first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")
keyword = input("Enter your secret keyword: ")
first_three = first_name[:3]
last_three = last_name[-3:]
reverse_keyword = keyword[::-1]
password = first_three.upper() + last_three.lower() + reverse_keyword.upper()
print("Generated Password:", password)