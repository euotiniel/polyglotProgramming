mensagem = input("Digite a mensagem que deseja criptografar: ")
criptografada = ""

for letra in mensagem:
    # verificar se a letra é uma letra do alfabeto
    if letra.isalpha():
        # calcular o novo índice da letra após a cifra de César
        novo_indice = (ord(letra) + 3 - 65) % 26 + 65

        # adicionar a letra criptografada à string resultante
        criptografada += chr(novo_indice)
    else:
        # se a letra não for uma letra do alfabeto, adicionar à string resultante sem criptografia
        criptografada += letra

print("A mensagem criptografada é:", criptografada)


