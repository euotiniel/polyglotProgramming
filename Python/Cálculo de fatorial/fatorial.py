num = int(input("Digite um número: "))

fatorial = 1

# loop para calcular o fatorial
for i in range(1, num+1):
    fatorial *= i

print("O fatorial de", num, "é", fatorial)


