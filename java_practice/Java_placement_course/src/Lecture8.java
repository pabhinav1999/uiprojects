import java.util.* ;
class Lecture8 {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number");
        int a = sc.nextInt();
        System.out.println("Enter second number");
        int b = sc.nextInt();
        System.out.println("Enter third number");
        int c = sc.nextInt();

        printAverage(a,b,c);
        printSumOfAllOddNumbersFrom1toN(b);
        System.out.println(greatestNumberOfTwo(a,b));
        System.out.println(circumference(c));
        System.out.println(canVote(b));
        userEnterNumber();
        System.out.println(calculatePower(8,3));
        printFibonacciSeries(c);
<<<<<<< Updated upstream
=======
        userEnterNumber();
        System.out.println(calculatePower(8,3));
>>>>>>> Stashed changes
    }

    public static void printAverage(int n1,int n2,int n3){
        System.out.println((n1 + n2 + n3)/3);
    }

    public static void printSumOfAllOddNumbersFrom1toN(int number){
        int sum = 0;
        for(int i=1;i<=number;i+=2){
            sum = sum + i;
        }
        System.out.println(sum);
    }

    public static int greatestNumberOfTwo(int n1,int n2){
        return n1 > n2 ? n1 : n2 ;
    }

    public static double circumference(int radius){
        final double pi = 3.14 ;
        return 2 * pi * radius;
    }

    public static String canVote(int  age){
        return age> 18 ? "Can Vote" : "Cannot vote" ;
    }

<<<<<<< Updated upstream
    public static void userEnterNumber(){
        Scanner sc = new Scanner(System.in);
        int positiveNumbers = 0;
        int negativeNumbers = 0;
        int zeroNumbers = 0;
        int code;
        do{
            System.out.println("Enter a number");
            int number = sc.nextInt();
            if( number > 0){
                positiveNumbers++;
            } else if(number < 0){
                negativeNumbers++;
            }else{
                zeroNumbers++;
            }
            System.out.println("enter a whether you want to   number");
             code = sc.nextInt();
        }while(code == 1);

        System.out.println(positiveNumbers+"  "+zeroNumbers+" "+negativeNumbers);
    }

    public static int calculatePower(int x,int n){
        int product = 1;
        for(int i = 1;i<=n;i++){
             product = product * x;
        }
        return product;
    }

    public static int greatestCommondivisor(int a,int b){
        if (b==0)
         return a;
        return greatestCommondivisor(b, a%b);
    }

    public static void printFibonacciSeries(int n){
        int f1 = 0; int f2 = 1;
        if(n < 1)
        return ;
        System.out.println(f1+" ");
            for(int i=1;i<n;i++){
                System.out.println(f2+" ");
                int next = f1 + f2;
                f1 = f2;
                f2 = next;
            }
    }

=======
>>>>>>> Stashed changes

}