palavra = input("Digite uma palavra: ")

# remover espaços em branco e transformar em letras minúsculas
palavra = palavra.replace(" ", "").lower()

# verificar se a palavra é um palíndromo
if palavra == palavra[::-1]:
    print("A palavra é um palíndromo.")
else:
    print("A palavra não é um palíndromo.")


