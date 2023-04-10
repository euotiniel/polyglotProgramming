def cifra_de_cesar(palavra, deslocamento)
    alfabeto = ("a".."z").to_a
    criptografado = ""
  
    palavra.each_char do |letra|
      if letra.match(/[a-zA-Z]/)
        letra.downcase! # converte a letra para minúscula
        posicao = alfabeto.index(letra)
        nova_posicao = (posicao + deslocamento) % 26
        criptografado += alfabeto[nova_posicao]
      else
        criptografado += letra
      end
    end
  
    return criptografado
  end
  
  puts "Digite a palavra a ser criptografada:"
  palavra = gets.chomp
  
  criptografado = cifra_de_cesar(palavra, 3)
  puts "A palavra criptografada é: #{criptografado}"
  