import java.util.*;
class Lecture22 {

    public static void quickSort(int a[],int low,int high){
        if(low < high){
            int pi = partition(a,low,high);
            quickSort(a,low,pi-1);
            quickSort(a,pi+1,high);
        }
    }

    public static void swap(int a[],int i,int j){
        int temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    public static int partition(int a[],int low,int high){
        int pivot = a[high];
        int i = low - 1;
        for(int j=low;j<=high-1;j++){
            if(a[j] < pivot ){
                i++;
                swap(a,i,j);
            }
        }
        swap(a,(i+1),high);
        return (i+1);
    }
    
    public static void mergeSort(int a[],int low,int high){
        if(low < high){
            int mid = low + (high-low)/2 ;
            mergeSort(a,low,mid);
            mergeSort(a,mid+1,high);
            merge(a,low,mid,high);
        }
    }

    public static void merge(int a[],int low,int mid,int high){
        int leftSize = mid - low + 1;
        int rightSize = high - mid;
        int left[] = new int[leftSize];
        int right[] = new int[rightSize];
        //copy arrays

        for(int i=0;i<leftSize;i++){
            left[i] = a[low+i];
        }

        for(int j=0;j<rightSize;j++){
            right[j] = a[mid+1+j];
        }
       int i=0,j=0,k=low;
        while(i<leftSize && j<rightSize){
            if(left[i]<=right[j]){
                a[k++]=left[i++];
            }
            else{
                a[k++]=right[j++];
            }
        }

        while(i<leftSize){
            a[k++]=left[i++];
        }

        while(j<rightSize){
            a[k++]=right[j++];
        }
    }

    public static void printArray(int a[]){
        for(int i=0;i<a.length;i++){
            System.out.print(a[i]);
        }
    }
    
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the length of the array:");
        int n = sc.nextInt();

        int arr[] = new int[n];
        for(int i=0;i<n;i++){
            arr[i] = sc.nextInt();
        }

        int b[] = {1,6,3,7,0,2} ;

        mergeSort(arr,0,n-1);
        quickSort(b,0,5);
        printArray(arr);
        printArray(b);
    }
}