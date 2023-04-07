import java.util.ArrayList;
import java.util.Scanner;
import java.util.Collections;
public class CollectionExercise {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        ArrayList<String> colors = new ArrayList<String>();
        System.out.println("Enter Colors:");
        for(int i=0;i<3;i++){
            colors.add(sc.next());
        }
        ArrayList<String> colorsCopy = colors;
        System.out.println(colors);
        colors.add(0,"Pink");
        // int idx = colors.indexOf("Purple");
        // colors.remove(idx);
        // colors.add(idx,"Grey");

        colors.set(1,"Black");
        System.out.println(colorsCopy);
        for(int i=0;i<colors.size();i++){
            System.out.print(colors.get(i)+" ");
        
        }



        System.out.println();
        System.out.println(colors.get(2));

        colors.remove(2);
        System.out.println(colors.indexOf("White"));
        Collections.sort(colors);
        System.out.println(colors);
        

    }

    // public static void printArrayList(ArrayList<String>() arr){
    //     for(int i=0;i<arr.size();i++){
    //         System.out.print(arr.get(i)+" ");
    //     }
    // }
}