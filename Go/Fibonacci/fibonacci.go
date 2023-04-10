package main

import "fmt"

func fibonacci(n int) {
    a, b := 0, 1
    for i := 0; i < n; i++ {
        fmt.Println(a)
        a, b = b, a+b
    }
}

func main() {
    var n int
    fmt.Print("Digite o número de termos da sequência de Fibonacci a serem exibidos: ")
    fmt.Scan(&n)
    fibonacci(n)
}
