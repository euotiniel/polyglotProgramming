# loop de 1 a 100
for i in range(1, 101):
    # se o número é múltiplo de 3 e 5, imprime "FizzBuzz"
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    # se o número é múltiplo de 3, imprime "Fizz"
    elif i % 3 == 0:
        print("Fizz")
    # se o número é múltiplo de 5, imprime "Buzz"
    elif i % 5 == 0:
        print("Buzz")
    # se o número não é múltiplo de 3 ou 5, imprime o número
    else:
        print(i)

