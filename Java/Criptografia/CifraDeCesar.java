import java.util.Scanner;

public class CifraDeCesar {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite uma mensagem: ");
        String mensagem = scanner.nextLine();

        String mensagemCriptografada = criptografar(mensagem, 3);
        System.out.println("Mensagem criptografada: " + mensagemCriptografada);

        String mensagemDescriptografada = descriptografar(mensagemCriptografada, 3);
        System.out.println("Mensagem descriptografada: " + mensagemDescriptografada);

        scanner.close();
    }

    public static String criptografar(String mensagem, int deslocamento) {
        StringBuilder sb = new StringBuilder();

        for (char c : mensagem.toCharArray()) {
            if (Character.isLetter(c)) {
                char criptografado = (char) (((c - 'a' + deslocamento) % 26) + 'a');
                sb.append(criptografado);
            } else {
                sb.append(c);
            }
        }

        return sb.toString();
    }

    public static String descriptografar(String mensagem, int deslocamento) {
        StringBuilder sb = new StringBuilder();

        for (char c : mensagem.toCharArray()) {
            if (Character.isLetter(c)) {
                char descriptografado = (char) (((c - 'a' - deslocamento + 26) % 26) + 'a');
                sb.append(descriptografado);
            } else {
                sb.append(c);
            }
        }

        return sb.toString();
    }
}
