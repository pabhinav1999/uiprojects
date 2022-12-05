import java.lang.annotation.Retention;
import java.util.*;
public class Lecture12 {
    public static void main (String args[]){
        Scanner sc = new Scanner(System.in);
        String firstName = "Abhinav";
        String lastName = "Pulijala";
        System.out.println(firstName+" "+lastName);
        System.out.println("Enter a string:");
        String inputString = sc.nextLine();
        System.out.println("My name is "+inputString);
        for(int i=0;i<inputString.length();i++){
            System.out.print(inputString.charAt(i));
        }

        String compare1 = "Abc";
        String compare2 = "abc";

        if(compare1.compareTo(compare2)==0){
            System.out.println("Strings are equal");
        }
        else if(compare1.compareTo(compare2)>0){
                System.out.println(compare1+" is gerater than "+compare2);
            }
        else{
            System.out.println(compare2+" is greater than "+compare1);
        }

        String example="TonyStark";
        System.out.println(example.substring(7));
        System.out.println(example.substring(3,example.length()));
        String parseString = "123";
        int number = Integer.parseInt(parseString);
        System.out.println(number);
        sc.close();
    }
}
