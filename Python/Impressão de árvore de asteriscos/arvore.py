altura = int(input("Digite a altura da árvore: "))

# loop para imprimir cada linha da árvore
for i in range(altura):
    # imprime espaços em branco antes dos asteriscos
    for j in range(altura-i-1):
        print(" ", end="")
    # imprime os asteriscos para a linha atual
    for j in range(2*i+1):
        print("*", end="")
    # imprime uma quebra de linha para a próxima linha da árvore
    print()


