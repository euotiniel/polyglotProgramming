def fatorial(n)
    if n == 0
      return 1
    else
      return n * fatorial(n-1)
    end
  end
  
  puts "Digite um número para calcular o fatorial:"
  num = gets.chomp.to_i
  
  resultado = fatorial(num)
  
  puts "O fatorial de #{num} é #{resultado}."
  