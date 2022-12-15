import java.util.*;
public class Lecture13 {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        StringBuilder sb = new StringBuilder("");
        sb.append(sc.nextLine());
        System.out.println(sb);
        System.out.println(sb.charAt(3));
        sb.setCharAt(2, 'F');
        System.out.println(sb);
        sb.insert(2,"Abc");
        System.out.println(sb);
        sb.delete(2,5);
        System.out.println(sb);
        sb.append(" Bingo");
        System.out.println(sb);
        System.out.println(sb.length());
        
        for(int i=0;i<sb.length()/2;i++){
            int front = i;
            int back = sb.length()-1-i;
            char frontChar = sb.charAt(front);
            char backChar = sb.charAt(back);

            sb.setCharAt(front, backChar);
            sb.setCharAt(back, frontChar);
        }
        System.out.println(sb);

    }

    // public static String reverse(StringBuilder sb ){
    //     for(int i=0;i<sb.length()/2;i++){
    //         sb.setChar
    //     }
    //     return sb;
    // }
}
