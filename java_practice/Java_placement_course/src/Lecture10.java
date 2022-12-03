import java.util.*;
public class Lecture10 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array");
        int size = sc.nextInt();
        int[] numbers = new int[size];
        System.out.println("Enter numbers of array");
        for(int i=0;i<size;i++){
            numbers[i] = sc.nextInt();
        }

        for(int i=0;i<size;i++){
            System.out.println(numbers[i]);
        }
        linearSearch(numbers, size, 8);
        sc.close();

    }

    public static void linearSearch(int arr[],int size,int key){
        for(int i = 0;i<size;i++){
            if(arr[i]== key){
                System.out.println(key+" is present at index "+i);
                return;
            }
        }
        System.out.println("key not found in given array");
    }
}
