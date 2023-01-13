import java.util.ArrayList ;
import java.util.Collections ;
class Lecture25 {
    public static void main (String[] args){
        ArrayList<Integer> list = new ArrayList<Integer>();

        //add elements
        list.add(1);
        list.add(2);
        System.out.println(list);

        //get element
        list.get(0);
        System.out.println(list);

        //modify element
        list.add(0,7887);
        list.add(1,566);
        System.out.println(list);


        //remove element
        list.remove(2);
        System.out.println(list);

        //loops
        for(int i=0;i<list.size();i++){
            System.out.print(list.get(i));
        }

        Collections.sort(list);
        System.out.println(list);


    }
}