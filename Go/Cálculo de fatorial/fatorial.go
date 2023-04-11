package main

import "fmt"

func main() {
    var num int
    var resultado int = 1

    fmt.Print("Digite um número: ")
    fmt.Scanln(&num)

    for i := 1; i <= num; i++ {
        resultado *= i
    }

    fmt.Printf("O fatorial de %d é %d\n", num, resultado)
}
