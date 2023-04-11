package main

import (
	"fmt"
)

func main() {
	var palavra string
	fmt.Print("Digite a palavra a ser criptografada: ")
	fmt.Scan(&palavra)

	cifraCesar := ""

	for i := 0; i < len(palavra); i++ {
		caractere := palavra[i]

		if caractere >= 'a' && caractere <= 'z' {
			caractere = (caractere + 3 - 'a') % 26 + 'a'
		} else if caractere >= 'A' && caractere <= 'Z' {
			caractere = (caractere + 3 - 'A') % 26 + 'A'
		}

		cifraCesar += string(caractere)
	}

	fmt.Println("Palavra criptografada:", cifraCesar)
}
