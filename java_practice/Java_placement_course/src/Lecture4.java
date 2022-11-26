import java.util.*;
class Lecture4 {
    public static void main(String args[]){
        //sum of first n natural numbers
        // print the table of a number
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter natural number ");
        int n = sc.nextInt();
        int sum = 0;
        for(int i=1;i<n+1;i++){
            sum=sum+i;
        }
        System.out.println(sum);
        System.out.println("Enter natural number ");
        int nthtable = sc.nextInt();
        for(int i=1;i<11;i++){
            System.out.println( nthtable+" * "+i+" = "+nthtable * i);
        }

        for(int i=0;i<n;i=i+2){
            System.out.println(i);  //print all even numbers upto n
        }
        
        // Make a menu driven program. The user can enter 2 numbers, either 1 or 0. 
        // If the user enters 1 then keep taking input from the user for a student’s marks(out of 100). 
        // If they enter 0 then stop.
        // If he/ she scores :
        // Marks >=90 -> print “This is Good”
        // 89 >= Marks >= 60 -> print “This is also Good”
        // 59 >= Marks >= 0 -> print “This is Good as well”
        //     Because marks don’t matter but our effort does.

        System.out.println("Enter a menu driven number");
        int menu = sc.nextInt();
        do{
            if(menu == 1){
                System.out.println("enter marks");
                int marks = sc.nextInt();
                if(marks>=90){
                    System.out.println("This is good");
                }else if(marks>=60 && marks<=89){
                    System.out.println("This is also good");                 
                }else{
                    System.out.println("This is also good as well");
                }
            System.out.println("enter menu driven number");
              menu = sc.nextInt();
            }
            else{
                System.out.println("stop entering marks");
            }
        }while(menu!=0);
        sc.close();
    }
}