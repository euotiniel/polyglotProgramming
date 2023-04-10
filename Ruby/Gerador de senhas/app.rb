# Define uma lista de caracteres para serem usados na senha
caracteres = [('a'..'z'), ('A'..'Z'), (0..9)].map(&:to_a).flatten

# Gera uma senha aleatória de 8 caracteres
senha = (0..7).map { caracteres[rand(caracteres.length)] }.join

puts "Sua senha é: #{senha}"
