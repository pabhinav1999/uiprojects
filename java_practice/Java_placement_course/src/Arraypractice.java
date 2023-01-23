import java.util.Arrays;

public class Arraypractice {

    public static void main(String[] args){
        int a[] = {5,3,2,9,0,2};
        char b[][] = new char[10][9];
        String s = "focus";
        Arrays.sort(a);
        printArr(a);
        System.out.println(sortString(s));
        System.out.println(sumArray(a));
        Arrays.fill(b,'c');
        print2DArray(b);
        
    }

    public static String sortString(String s){
        char schar[] = s.toCharArray();
        Arrays.sort(schar);
        return new String(schar);
    }

    public static void printArr(int arr[]){
        for(int i=0;i<arr.length;i++)
            System.out.print(arr[i]+" ");
    }

    public static int sumArray(int arr[]){
        int sum=0;
        for(int i=0;i<arr.length;i++){
            sum+=arr[i];
        }
     return sum;  
    }

    public static void print2DArray(char a[][]){
        int rows = a.length;
        int cols = a[0].length;
        for(int i=0;i<rows;i++){
            for(int j=0;j<cols;j++){
                System.out.print(a[i][j]+" ");
            }
            System.out.println();
        }
    }

}
