import java.util.*;
class Lecture16 {
    public static void printArray(int a[]){
        for(int i=0;i<a.length;i++){
            System.out.print(a[i]+" ");
        }
    }

    public static void main(String[] args){

        int arr[] = {7,8,3,1,2,0} ;

        //bubble sort 
        for(int i=0;i<arr.length-1;i++){
            for(int j=0;j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }

        //selectionsort
        for(int i=0;i<arr.length;i++){
            int smallest = i;
            for(int j=i;j<arr.length;j++){
                if(arr[j]<arr[smallest]){
                    smallest = j;
                }
            }
            int temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp ;
        }

        // insertion sort

        for(int i=0;i<arr.length;i++){
            int current = arr[i];
            int j = i-1;;
            while(j>=0 && current < arr[j]){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] =current;
        }

        printArray(arr);
    }

}