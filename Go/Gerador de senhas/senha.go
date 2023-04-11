package main

import (
	"crypto/rand"
	"fmt"
	"math/big"
)

func main() {
	// caracteres que podem ser utilizados na senha
	chars := "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

	// tamanho da senha
	size := 10

	// slice para armazenar os caracteres da senha
	var password []byte

	// gera a senha aleatória
	for i := 0; i < size; i++ {
		// gera um número aleatório entre 0 e o tamanho da string "chars"
		num, err := rand.Int(rand.Reader, big.NewInt(int64(len(chars))))
		if err != nil {
			panic(err)
		}

		// adiciona o caractere correspondente ao número gerado na senha
		password = append(password, chars[num.Int64()])
	}

	// exibe a senha ao usuário
	fmt.Printf("Sua senha aleatória: %s\n", string(password))
}
