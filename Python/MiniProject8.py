contacts = {}
while True:
    print("\n===== CONTACT BOOK =====")
    print("1. Add Contact")
    print("2. Update Contact")
    print("3. Delete Contact")
    print("4. Search Contact")
    print("5. Display All Contacts")
    print("6. Exit")
    choice = input("Enter your choice: ")
    if choice == "1":
        name = input("Enter Name: ")
        phone = input("Enter Phone Number: ")
        email = input("Enter Email: ")

        contacts[name] = {
            "phone": phone,
            "email": email
        }
        print("Contact added successfully!")
    elif choice == "2":
        name = input("Enter Name to update: ")

        if name in contacts:
            print("1. Update Phone")
            print("2. Update Email")

            update_choice = input("Enter your choice: ")

            if update_choice == "1":
                new_phone = input("Enter New Phone Number: ")
                contacts[name]["phone"] = new_phone
                print("Phone number updated successfully!")

            elif update_choice == "2":
                new_email = input("Enter New Email: ")
                contacts[name]["email"] = new_email
                print("Email updated successfully!")

            else:
                print("Invalid choice!")
        else:
            print("Contact not found!")

    elif choice == "3":
        name = input("Enter Name to delete: ")

        if name in contacts:
            del contacts[name]
            print("Contact deleted successfully!")
        else:
            print("Contact not found!")

    elif choice == "4":
        name = input("Enter Name to search: ")

        if name in contacts:
            print("\nContact Found!")
            print("Name:", name)
            print("Phone:", contacts[name]["phone"])
            print("Email:", contacts[name]["email"])
        else:
            print("Contact not found!")

    elif choice == "5":
        if len(contacts) == 0:
            print("No contacts available!")
        else:
            print("\n===== ALL CONTACTS =====")

            for name, details in contacts.items():
                print("Name:", name)
                print("Phone:", details["phone"])
                print("Email:", details["email"])
                print("----------------------")

    elif choice == "6":
        print("Thank you for using Contact Book!")
        break

    else:
        print("Invalid choice! Please try again.")
print()

library = {}

while True:
    print("\n===== LIBRARY MANAGEMENT SYSTEM =====")
    print("1. Add New Book")
    print("2. Update Book Availability")
    print("3. Remove Book")
    print("4. List All Available Books")
    print("5. Exit")

    choice = input("Enter your choice: ")

    # 1. Add a new book
    if choice == "1":
        book_id = input("Enter Book ID: ")
        title = input("Enter Book Title: ")
        author = input("Enter Author Name: ")
        copies = int(input("Enter Number of Copies: "))

        library[book_id] = {
            "title": title,
            "author": author,
            "copies": copies
        }

        print("Book added successfully!")

    # 2. Update book availability
    elif choice == "2":
        book_id = input("Enter Book ID: ")

        if book_id in library:
            print("1. Borrow Book")
            print("2. Return Book")

            option = input("Enter your choice: ")

            if option == "1":
                if library[book_id]["copies"] > 0:
                    library[book_id]["copies"] -= 1
                    print("Book borrowed successfully!")
                else:
                    print("No copies available!")

            elif option == "2":
                library[book_id]["copies"] += 1
                print("Book returned successfully!")

            else:
                print("Invalid choice!")

        else:
            print("Book not found!")

    # 3. Remove a book
    elif choice == "3":
        book_id = input("Enter Book ID to remove: ")

        if book_id in library:
            del library[book_id]
            print("Book removed successfully!")
        else:
            print("Book not found!")

    # 4. List all available books
    elif choice == "4":
        print("\n===== AVAILABLE BOOKS =====")

        found = False

        for book_id, details in library.items():
            if details["copies"] > 0:
                print("Book ID:", book_id)
                print("Title:", details["title"])
                print("Author:", details["author"])
                print("Copies Available:", details["copies"])
                print("---------------------------")
                found = True

        if found == False:
            print("No books are currently available.")

    # 5. Exit
    elif choice == "5":
        print("Thank you for using Library Management System!")
        break

    else:
        print("Invalid choice! Please try again.")
print()

# 1. Create a set of available courses
available_courses = {
    "Python",
    "Java",
    "Web Development",
    "Data Science",
    "Machine Learning"
}

# Create an empty set for student courses
student_courses = set()

while True:
    print("\n===== COURSE ENROLLMENT SYSTEM =====")
    print("1. Enroll in a Course")
    print("2. Remove a Course")
    print("3. Show Enrolled Courses")
    print("4. Exit")

    choice = input("Enter your choice: ")

    # 2. Enroll in a course
    if choice == "1":
        course = input("Enter Course Name: ")

        if course in available_courses:
            student_courses.add(course)
            print("Course enrolled successfully!")
        else:
            print("Course not found!")

    # 3. Remove a course
    elif choice == "2":
        course = input("Enter Course Name to remove: ")

        if course in student_courses:
            student_courses.remove(course)
            print("Course removed successfully!")
        else:
            print("You are not enrolled in this course!")

    # 4. Show enrolled courses
    elif choice == "3":
        print("\nEnrolled Courses:")

        if len(student_courses) == 0:
            print("No courses enrolled.")
        else:
            for course in student_courses:
                print(course)

    # 5. Exit
    elif choice == "4":
        print("\nFinal List of Enrolled Courses:")

        for course in student_courses:
            print(course)

        print("Thank you!")
        break

    else:
        print("Invalid choice! Please try again.")
print()

# 1. Ask the user to enter a paragraph
paragraph = input("Enter a paragraph: ")

# 2. Convert paragraph into a set of unique words
words = paragraph.lower().split()
unique_words = set(words)

# 3. Create a frozen set of common words
common_words = frozenset({
    "is", "a", "the", "and", "to", "of", "in"
})

# 4. Find common words using intersection()
common_found = unique_words.intersection(common_words)

# Remove common words using difference()
unique_words = unique_words.difference(common_words)

# 5. Display total unique words
print("\nTotal Unique Words:", len(unique_words))

print("Unique Words:")
for word in unique_words:
    print(word)