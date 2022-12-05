import java.util.*;
public class Lecture10_Homework {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array:");
        int size = sc.nextInt();
        String names[] = new String[size];
        for(int i = 0;i<size;i++){
            names[i]=sc.next();
        }

        for(int i=0;i<size;i++){
            System.out.println(names[i]);
        }
        int a[] = {2,4,-9,6,8,9};
        int b[] = {0,1,2,3,4,5,6};
        maxMinInArray(a, 6);
        System.out.println(checkSortedArrayInAscendingOrder(a, 6));
       System.out.println(checkSortedArrayInAscendingOrder(b, 7));
        sc.close();
    }

    public static void  maxMinInArray(int a[],int size){
        int max = Integer.MIN_VALUE ;
        int min = Integer.MAX_VALUE ;

        for(int i=0;i<size;i++){
            if(a[i]>max){
                max = a[i];
            }else {
                min = a[i];
            }
        }
        System.out.println("MAx is "+max+" Min is "+min);
    }

    public static  boolean checkSortedArrayInAscendingOrder(int a[],int size){
        for(int i=0;i<size-1;i++){
            if(a[i]>a[i+1])
            return false;
        }
        return true;
    }
}
