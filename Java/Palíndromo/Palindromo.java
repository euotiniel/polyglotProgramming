import java.util.Scanner;

public class Palindromo {
   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);

      System.out.println("Digite uma palavra:");
      String palavra = scanner.nextLine().toLowerCase();

      boolean resultado = isPalindromo(palavra);
      if (resultado) {
         System.out.println("A palavra '" + palavra + "' e um palindromo.");
      } else {
         System.out.println("A palavra '" + palavra + "' nao e um palindromo.");
      }

      scanner.close();
   }

   public static boolean isPalindromo(String palavra) {
      int tamanho = palavra.length();
      for (int i = 0; i < tamanho / 2; i++) {
         if (palavra.charAt(i) != palavra.charAt(tamanho - 1 - i)) {
            return false;
         }
      }
      return true;
   }
}
