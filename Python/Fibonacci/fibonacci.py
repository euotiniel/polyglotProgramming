n = int(input("Digite um número, vamos achar as sequências de Fibonacci até ele: "))

# inicializa as variáveis
fib1, fib2 = 0, 1

# imprime os primeiros dois termos
print(fib1)
print(fib2)

# calcula os próximos termos e os imprime até que o valor seja maior que n
while fib2 <= n:
    fib3 = fib1 + fib2
    print(fib3)
    fib1, fib2 = fib2, fib3


