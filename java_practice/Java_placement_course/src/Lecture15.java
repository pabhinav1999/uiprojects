import java.util.*;
public class Lecture15 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int position = 2;
        int a = 7;
        //get bit in bit manipulation
        int bitMask = a << (position - 1) ;
        System.out.println(bitMask&a);
        if((bitMask&a)!=0){
            System.out.println("the bit at second position is one");
        }else{
            System.out.println("The bit at second postion is zero");
        }
        System.out.println("Enter 0 or 1 to update");
        int updateBit = sc.nextInt();
        if(updateBit == 1){
          System.out.println(bitMask|a);
        }else
        {
            int notBitMask = ~(bitMask);
        }

    }
    
}
