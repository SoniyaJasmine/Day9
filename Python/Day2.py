print()
name="Soniya.G"
print(name)
print()

print(""" 
    A Hearty Welcome to All
    Thank you for joining us.
    """)
print()

name="Soniya G"
age=27
favorite_color="Blue"
print(f"My name is {name}. I am {age} years old. My favourite color is{favorite_color}")
print()

a=4
b=22.7
c="Soniya"
d=False
print(type(a))
print(type(b))
print(type(c))
print(type(d))
print()

your_name=input("Enter Your Name:")
print("Hai," + your_name + " let's begin")
print()

a=int(input("Price of Apple:"))
b=int(input("Price of Banana:"))
total=a+b
print(total)
print()

num=int(input("Enter a number: "))
print("Type: ", type(num))
num=float(num)
print("New Type: ", type(num))
print()

length=int(input("Length of a Rectangle:"))
width=int(input("Width of a Rectangle:"))
lb=length+width
area=2*(lb)
print(f"Area of a Rectangle = {area}")
print()

name=input("Product Name:")
quantity=int(input("Quantity:"))
price=int(input("Price of the Product:"))
print(f"{name} - {quantity} - {price}")
print()

x=int(input("Enter 1st number:"))
y=int(input("Enter 2nd number:"))
print("Before Swapping: ")
print("a=",x)
print("b=",y)
x, y = y, x
print("After Swapping: ")
print("a=",x)
print("b=",y)
print()

celsius=float(input("Temperature in Celsius:"))
fahrenheit = (celsius * 9/5) + 32
print(f"Temperature in Fahrenheit: {fahrenheit}")
print()

name=input("Enter Your Name:")
age=int(input("Enter Your Age:"))
height=float(input("Enter Your Height:"))
hobby=input("Enter Your Favourite Hobby:")
print(name)
print(age)
print("Height:", + height)
print(f"Favourite Hobby: {hobby}")
