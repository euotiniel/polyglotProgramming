function printTree(n: number) {
  let spaces = n - 1;
  let stars = 1;
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(spaces) + "*".repeat(stars));
    spaces--;
    stars += 2;
  }
}

printTree(10); // altere o número para imprimir uma árvore com mais ou menos níveis
