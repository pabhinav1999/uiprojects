import java.util.*;
public class Lecture18 {
    public static void main(String[] args){
        int a = 0, b = 1;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        int n = sc.nextInt();
        System.out.println(factorial(n));

        System.out.println(a);
        System.out.println(b);
        printFibonacci(a,b,n-2);
        sc.close();
    }

    public static int factorial(int n){
        if(n==1 || n==0)
         return 1;
        else
         return n*factorial(n-1);
    }

    public static void printFibonacci(int a,int b,int n){
        if(n==0)
         return;
        
         System.out.println(a+b);
         printFibonacci(b, a+b, n-1)

    }
}
