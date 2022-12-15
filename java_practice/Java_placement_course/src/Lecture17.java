import java.util.*;
public class Lecture17 {
    //recursion
    public static void printNumbers(int n){
        //base case
    if(n==0){
        return ;
    }
    //work of step1
     System.out.println(n);
     //calling recursive function
     printNumbers(n-1);
    }

    public static void printNumbersFrom1(int i,int n){
        if(i==n){
            System.out.println(i);
            return;
        }
        System.out.println(i);
        printNumbersFrom1(i+1, n);
    }

    public static void printSum(int sum,int i,int n){
        if(i==n){
            sum+=i;
            System.out.println(sum);
            return;
        }

        sum+=i;
        System.out.println(sum);
        printSum(sum, i+1, n);
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number");
        int n = sc.nextInt();
        printNumbers(n);
        printNumbersFrom1(1, n);
        printSum(0,0,n);
    }
}
