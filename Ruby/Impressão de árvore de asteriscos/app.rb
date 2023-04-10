puts "Digite o número de níveis da árvore:"
num_niveis = gets.chomp.to_i

(1..num_niveis).each do |nivel|
  espacos = " " * (num_niveis - nivel)
  asteriscos = "*" * (2 * nivel - 1)
  puts espacos + asteriscos
end
