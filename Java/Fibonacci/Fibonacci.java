import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o numero maximo para a sequencia de Fibonacci: ");
        int maxNumber = scanner.nextInt();

        int a = 0;
        int b = 1;

        while (a <= maxNumber) {
            System.out.print(a + " ");
            int c = a + b;
            a = b;
            b = c;
        }

        scanner.close();
    }
}
