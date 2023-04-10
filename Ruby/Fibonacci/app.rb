def fibonacci(n)
    if n <= 1
      return n
    else
      return fibonacci(n-1) + fibonacci(n-2)
    end
  end
  
  def fibonacci_sequence(limit)
    if limit <= 0
      puts "O limite deve ser maior que zero."
    else
      puts "Sequência de Fibonacci até #{limit}:"
      i = 0
      while fibonacci(i) <= limit
        puts fibonacci(i)
        i += 1
      end
    end
  end
  
  puts "Digite o limite para a sequência de Fibonacci:"
  limit = gets.chomp.to_i
  
  fibonacci_sequence(limit)
  