# Supermarket Billing
a = 0
b = 0
c = 0
while True:
    item = input('Item: ')
    amount = input('Amount: ')
    a = int(amount)
    price = input('Price: ')
    b = int(price)
    c += a * b
    next_item = input('Is there another item? ')
    if next_item != 'Yes':
        print('Please choose between Yes or No')
    if next_item == 'No':
        break
print('Total: ', c)