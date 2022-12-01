import java.util.* ;
class Lecture7 {
    public static void printMyName(String name){
        System.out.println("My name is "+name);
    }

    public static int calculateSum(int a ,int b){
        int sum;
        sum = a + b;
        return sum;
    }

    public static int calculateProduct(int a, int b){
        return a * b;
    }

    public static void printFactorial(int n){
        if(n<0){
         System.out.println("Invalid number");
         return;
        }
        int product=1;

        for(int i=n;i>=1;i--){
            product = product * i;
        }

        System.out.println("Factorial of "+ n +" is "+ product);

    }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name:");
        String name = sc.next();
        printMyName(name);
        System.out.println("Enter numbers a and b for sum and product:");
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println("Sum is"+calculateSum(a,b));
        System.out.println("Product is "+calculateProduct(a,b));

        System.out.println("Enter a number for factorial:");
        int n = sc.nextInt();
        printFactorial(n);
        sc.close();
    }
}