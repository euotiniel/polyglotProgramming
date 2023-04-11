package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano()) // inicializa o gerador de números aleatórios

	numeroAleatorio := rand.Intn(100) + 1 // gera um número aleatório entre 1 e 100

	for {
		var numero int
		fmt.Print("Digite um número entre 1 e 100: ")
		fmt.Scan(&numero) // lê o número digitado pelo usuário

		if numero == numeroAleatorio {
			fmt.Println("Parabéns! Você acertou o número.")
			break // sai do loop
		} else if numero < numeroAleatorio {
			fmt.Println("O número que você digitou é menor.")
		} else {
			fmt.Println("O número que você digitou é maior.")
		}
	}
}
