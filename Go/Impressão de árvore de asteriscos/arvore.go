package main

import (
	"fmt"
)

func main() {
	var linhas int
	fmt.Print("Digite o número de linhas da árvore: ")
	fmt.Scanln(&linhas)

	for i := 0; i < linhas; i++ {
		for j := 0; j < linhas-i-1; j++ {
			fmt.Print(" ")
		}
		for j := 0; j < i*2+1; j++ {
			fmt.Print("*")
		}
		fmt.Println()
	}
}
