# Gera um número aleatório entre 1 e 100
numero_aleatorio = rand(1..100)

# Define uma variável para armazenar o número de tentativas
tentativas = 0

puts "Adivinhe o número que estou pensando, entre 1 e 100:"

# Loop principal do jogo
loop do
  # Lê o número digitado pelo usuário
  palpite = gets.chomp.to_i
  
  # Incrementa o número de tentativas
  tentativas += 1
  
  # Verifica se o palpite do usuário é igual ao número aleatório
  if palpite == numero_aleatorio
    puts "Parabéns! Você acertou em #{tentativas} tentativas."
    break # Encerra o loop principal
  elsif palpite < numero_aleatorio
    puts "Tente novamente, o número é maior."
  else
    puts "Tente novamente, o número é menor."
  end
end
