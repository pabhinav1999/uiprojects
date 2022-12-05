import java.util.*;
public class Lecture11 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int rows = sc.nextInt();
        int columns = sc .nextInt();
        int numbers[][] = new int[rows][columns];
        for(int i=0;i<rows;i++){
            for(int j=0;j<columns;j++){
                numbers[i][j] = sc.nextInt();
            }
        }

        for(int i=0;i<rows;i++){
            for(int j=0;j<columns;j++){
                System.out.print(numbers[i][j]);
            }
            System.out.println();
        }
        System.out.println("Enter a key to search:");
        int key = sc.nextInt();

        linearSearch(numbers, rows, columns,key );

        
    }

    public static void linearSearch(int a[][],int rows,int columns,int key){
        for(int i=0;i<rows;i++){
            for(int j=0;j<columns;j++){
                if(a[i][j] == key){
                    System.out.println("key is found at"+i+" row and "+j+"column");
                    return;
                }
            }
        }
        System.out.println("key not found");
    }
}
