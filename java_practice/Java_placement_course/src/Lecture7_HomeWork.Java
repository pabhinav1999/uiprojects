import java.util.* ;
class Lecture7_HomeWork {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number:");
        int number = sc.nextInt();
        System.out.println(isPrime(number));
        System.out.println(isEven(number));
        printMuliplicationTable(number);
        sc.close();
    }

    public static boolean isPrime(int number){
        if(number == 1)
            return false;
        
        else if( number ==2 || number == 3)
            return true;

        else if( number%2 == 0 || number%3 == 0 )
           return false;

        for(int i=5;i<=number;i=i+6){
            if((number%i == 0) || (number % (i+2) == 0))
            return true;
        }
        return false;
    }

    public static boolean isEven(int number){
        return number%2 == 0 ? true : false;
    }

    public static void  printMuliplicationTable( int number){
        for( int i = 0; i< 11;i++){
            System.out.println(number+" * "+i+" = "+number*i);
        }
    }

}