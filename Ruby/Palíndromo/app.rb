puts "Digite uma palavra:"
palavra = gets.chomp.downcase

if palavra == palavra.reverse
  puts "#{palavra} é um palíndromo!"
else
  puts "#{palavra} não é um palíndromo."
end
