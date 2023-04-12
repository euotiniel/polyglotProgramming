import random
import string

# definir os caracteres que podem ser usados na senha
caracteres = string.ascii_letters + string.digits + string.punctuation

# definir o tamanho da senha
tamanho = 10

# gerar uma senha aleatória
senha = ''.join(random.choice(caracteres) for i in range(tamanho))

# exibir a senha para o usuário
print("Sua senha é:", senha)

