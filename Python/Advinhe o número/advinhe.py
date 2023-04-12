import random

# gerar um número aleatório entre 1 e 100
numero_aleatorio = random.randint(1, 100)

# inicializar o contador de tentativas
tentativas = 0

# loop para pedir ao usuário para adivinhar o número
while True:
    # pedir ao usuário para digitar um número
    tentativa = int(input("Digite um número entre 1 e 100: "))

    # incrementar o contador de tentativas
    tentativas += 1

    # verificar se o número é igual ao número aleatório
    if tentativa == numero_aleatorio:
        print("Parabéns! Você acertou após", tentativas, "tentativas!")
        break
    # verificar se o número é maior ou menor que o número aleatório
    elif tentativa > numero_aleatorio:
        print("O número é menor. Tente novamente.")
    else:
        print("O número é maior. Tente novamente.")


