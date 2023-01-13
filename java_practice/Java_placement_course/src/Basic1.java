// w3 resource java practice 13/01
import java.util.Scanner;
import java.lang.Math;

class Basic1 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number:");
        int a = sc.nextInt();

        System.out.println("Enter second number");
        int b = sc.nextInt();

        System.out.println("enter third number");
        int c = sc.nextInt();

        System.out.println("Hello");
        System.out.println("Abhinav kumar");
        System.out.println(74+36);
        System.out.println(50/3);
        System.out.println(-5 + 8 * 6);
        System.out.println((55+9) % 9);
        System.out.println(20 + -3*5 / 8);
        System.out.println(5 + 15 / 3 * 2 - 8 % 3);
        System.out.println(a*b);
        System.out.println(a-b);
        System.out.println(a%b);
        System.out.println(a/b);
        System.out.println(a+b);
        System.out.println();
        System.out.println();
        //print multiplication
        System.out.println("table for "+a);
        for(int i=0;i<=10;i++){
            System.out.println(a + " * " + i+" = "+ a*i);
        }
        
        System.out.println(((25.5 * 3.5 - 3.5 * 3.5) / (40.5 - 4.5)));
        System.out.println(4.0 * (1 - (1.0/3) + (1.0/5) - (1.0/7) + (1.0/9) - (1.0/11)));

        float r = 7.5f;
        System.out.println("Area is "+ 3.14*7.5*7.5);
        System.out.println("Perimeter is "+ 2*3.14*7.5);

        System.out.println(a+b+c/3);
        swap(a,b);
        System.out.println("a is "+a+"b is "+b);
        //skipped 18 question
        System.out.println(convertDecimalToBinary(20));
        System.out.println(convertToHexaDecimalNumber(3278));
        System.out.println((int)binaryToDecimal("101"));
        System.out.println("Java version is "+System.getProperty("java.version"));
        System.out.println("Java Home is "+System.getProperty("java.home"));
        System.out.println("Java vendor is "+System.getProperty("java.vendor"));
        System.out.println("sum of digits is "+computeSumOfDigits(456));


    }

    public static void swap(int a,int b){
        int temp;
        temp = a;
        a = b;
        b = temp;
    }

    public static String convertDecimalToBinary(int dec){
        String str="";
        while(dec!=0){
            if(dec%2 == 0){
                str=0+str;
            }
            else
            {
                str=1+str;
            }
            dec = dec/2;

        }
        return str;
    }

    public static char characterAssociatedInHex(int remainder){
        char remchar;
        switch (remainder){
            case 10:
              remchar= 'A';
              break;
            
            case 11:
             remchar = 'B';
              break;

            case 12:
             remchar = 'C';
              break;

            case 13:
              remchar = 'D';
              break;

            case 14:
              remchar = 'E';
              break;

            default:
             remchar = 'F';
             break;
            
        }
        return remchar;
    }

    public static String convertToHexaDecimalNumber(int dec){
        String str="";

        while(dec!=0){
            if(dec%16 > 9){
                str=characterAssociatedInHex(dec%16)+str;
            }
            else{
                str= dec%16 + str;
            }
            dec=dec/16;
        }
        return str;
    }

    public static double binaryToDecimal(String binary){
        double dec = 0;
        for(int i=0;i<binary.length();i++){
            int number = binary.charAt(i) - '0' ;
            dec = dec + number * Math.pow(2,i);
        }
        return dec;
    }

    public static int computeSumOfDigits(int number){
        int sum =0;
        while(number!=0){
            int rem = number%10;
            sum+=rem;
            number=number/10;
        }
        return sum;
    }
    //octal number is also same model
    //skipping 23 to 31 in w3 resources basic java


}