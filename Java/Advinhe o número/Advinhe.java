import java.util.Random;
import java.util.Scanner;

public class Advinhe {
    public static void main(String[] args) {
        Random random = new Random();
        int numeroAleatorio = random.nextInt(100) + 1; // gera um número aleatório entre 1 e 100
        Scanner scanner = new Scanner(System.in);

        System.out.println("Tente adivinhar o numero entre 1 e 100:");
        int tentativas = 0;

        while (true) {
            int resposta = scanner.nextInt();
            tentativas++;

            if (resposta == numeroAleatorio) {
                System.out.println("Parabens, voce acertou o numero em " + tentativas + " tentativas!");
                break;
            } else if (resposta < numeroAleatorio) {
                System.out.println("O numero e maior! Tente novamente:");
            } else {
                System.out.println("O numero e menor! Tente novamente:");
            }
        }

        scanner.close();
    }
}
