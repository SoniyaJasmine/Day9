# students = []
# while True:
#     print("\n1. Add Student")
#     print("2. Remove Student")
#     print("3. Update Student Name")
#     print("4. Show All Students")
#     print("5. Exit")
#     choice = input("Enter your choice: ")
#     if choice == "1":
#         name = input("Enter Student Name: ")
#         students.append(name)
#         print("Student added successfully!")
#     elif choice == "2":
#         name = input("Enter Student Name to remove: ")
#         if name in students:
#             students.remove(name)
#             print("Student removed successfully!")
#         else:
#             print("Student not found!")
#     elif choice == "3":
#         old_name = input("Enter current Student Name: ")
#         if old_name in students:
#             new_name = input("Enter new Student Name: ")
#             index = students.index(old_name)
#             students[index] = new_name
#             print("Student name updated successfully!")
#         else:
#             print("Student not found!")
#     elif choice == "4":
#         print("Student List:")
#         for student in students:
#             print(student)
#     elif choice == "5":
#         print("Thank you for using Student Management System!")
#         break
#     else:
#         print("Invalid choice! Please try again.")
# print()

# cart = []

# while True:
#     print("\n1. Add Product")
#     print("2. Remove Product")
#     print("3. View Cart")
#     print("4. Checkout")

#     choice = input("Enter your choice: ")

#     if choice == "1":
#         product_name = input("Enter Product Name: ")
#         price = float(input("Enter Price: "))

#         cart.append([product_name, price])
#         print("Product added successfully!")

#     elif choice == "2":
#         product_name = input("Enter Product Name to remove: ")

#         found = False

#         for item in cart:
#             if item[0].lower() == product_name.lower():
#                 cart.remove(item)
#                 print("Product removed successfully!")
#                 found = True
#                 break

#         if not found:
#             print("Product not found!")

#     elif choice == "3":
#         print("\nCart Items:")

#         if len(cart) == 0:
#             print("Cart is empty!")
#         else:
#             total_price = 0

#             for item in cart:
#                 print("Product:", item[0], "- Price:", item[1])
#                 total_price += item[1]

#             print("Total number of items:", len(cart))
#             print("Total price:", total_price)

#     elif choice == "4":
#         if len(cart) == 0:
#             print("Cart is empty!")
#         else:
#             total_price = 0

#             for item in cart:
#                 total_price += item[1]

#             print("Total items:", len(cart))
#             print("Total price:", total_price)
#             print("Checkout successful!")
#             break

#     else:
#         print("Invalid choice! Please try again.")
print()


# Tuple containing marks of 5 subjects
marks = (85, 90, 78, 92, 88)

# Calculate total, highest, lowest and average
total = sum(marks)
highest = max(marks)
lowest = min(marks)
average = total / len(marks)

print("Marks:", marks)
print("Total Marks:", total)
print("Highest Marks:", highest)
print("Lowest Marks:", lowest)
print("Average Marks:", average)

# Convert tuple to list
marks_list = list(marks)

# Modify one subject mark
marks_list[2] = 82

# Convert list back to tuple
marks = tuple(marks_list)

print("Modified Marks:", marks)
print()

# Shopping cart tuple
cart = ("Laptop", "Mouse", "Keyboard", "Headphones", "Mouse")

while True:
    print("\n1. View All Products")
    print("2. Add Product")
    print("3. Remove Product")
    print("4. Count Product")
    print("5. Show First Three Products")
    print("6. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        print("Products in Cart:")
        for product in cart:
            print(product)

    elif choice == "2":
        product = input("Enter Product Name to add: ")

        # Convert tuple to list
        cart_list = list(cart)

        # Add product
        cart_list.append(product)

        # Convert list back to tuple
        cart = tuple(cart_list)

        print("Product added successfully!")

    elif choice == "3":
        product = input("Enter Product Name to remove: ")

        if product in cart:
            # Convert tuple to list
            cart_list = list(cart)

            # Remove product
            cart_list.remove(product)

            # Convert list back to tuple
            cart = tuple(cart_list)

            print("Product removed successfully!")
        else:
            print("Product not found!")

    elif choice == "4":
        product = input("Enter Product Name to count: ")

        count = cart.count(product)

        print(product, "appears", count, "time(s) in the cart.")

    elif choice == "5":
        print("First Three Products:", cart[:3])

    elif choice == "6":
        print("Thank you!")
        break

    else:
        print("Invalid choice!")