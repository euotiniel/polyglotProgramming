package main

import (
	"fmt"
	"strings"
)

func main() {
	var word string
	fmt.Print("Digite uma palavra: ")
	fmt.Scan(&word)

	isPalindrome := true
	word = strings.ToLower(word)

	for i := 0; i < len(word)/2; i++ {
		if word[i] != word[len(word)-i-1] {
			isPalindrome = false
			break
		}
	}

	if isPalindrome {
		fmt.Printf("%s é um palíndromo\n", word)
	} else {
		fmt.Printf("%s não é um palíndromo\n", word)
	}
}
