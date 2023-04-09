import java.util.Random;

public class Gerador {
    public static void main(String[] args) {
        String caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        int tamanhoSenha = 12; // defina o tamanho da senha desejado

        String senha = gerarSenha(caracteres, tamanhoSenha);

        System.out.println("Sua senha gerada aleatoriamente e: " + senha);
    }

    public static String gerarSenha(String caracteres, int tamanhoSenha) {
        Random random = new Random();
        StringBuilder senha = new StringBuilder();

        for (int i = 0; i < tamanhoSenha; i++) {
            int index = random.nextInt(caracteres.length());
            senha.append(caracteres.charAt(index));
        }

        return senha.toString();
    }
}
