import java.util.*;
class ThirdClass {
    public static void main (String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the age:");
        int age = sc.nextInt();
        
        if(age > 18)
            System.out.println("Adult");
        else
            System.out.println("Not a adult");

        System.out.println("Enter the number to chek if its even or odd:");
        int num = sc.nextInt();

        if(num%2 == 0){
            System.out.println("even number");
        }
        else{
        System.out.println("odd number");
        }


        System.out.println("Enter numbers a and b to compare:");
        int a = sc.nextInt();
        int b = sc.nextInt();

        if(a == b){
            System.out.println("equal");
        }else if(a>b){
            System.out.println("greater");
        }else{
            System.out.println("lesser");
        }

        System.out.println("Enter button for greetings:");
        int button = sc.nextInt();

        switch(button){
            case 1 :
              System.out.println("Hello");
              break;

            case 2 :
            System.out.println("Namaste");
            break;

            case 3 :
            System.out.println("Bonjour");
            break;

            default:
            System.out.println("No greeting");
        }

        System.out.println("Enter operation for calculator:");
        char operation = sc.next().charAt(0);

        switch(operation){
            case '+' : System.out.println(a+b);
            break;

            case '-' : System.out.println(a-b);
            break;

            case '*' : System.out.println(a*b);
            break;

            case '/' : System.out.println(a/b);
            break;

            default : System.out.println(a%b);
        }

    }
}