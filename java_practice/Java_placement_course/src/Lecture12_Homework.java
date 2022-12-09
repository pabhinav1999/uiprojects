import java.util.* ;
class Lecture12_Homework {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array");
        int size = sc.nextInt() ;
        String names[] = new String[size];
        for(int i=0;i<size;i++){
            names[i] = sc.next();
        }
        System.out.println("Cumulative length is "+cumulativeLength(names));
        System.out.println("Old String is "+names[0]+"New String is "+replaceEwithI(names[0]));
        System.out.println("Username is "+getUserNameFromEmail("apnacollege@gmail.com"));
    }

    public static int cumulativeLength(String names[]){
        int cumulativeSum = 0;
        for(int i=0;i<names.length;i++){
            cumulativeSum = cumulativeSum + names[i].length();
        }
        return cumulativeSum;
    }

    public static String replaceEwithI(String text){
        String newStringAfterReplacing = "" ;
        for(int i=0;i<text.length();i++){
            if(text.charAt(i) == 'e')
             newStringAfterReplacing = newStringAfterReplacing + "i"  ;
            else
            newStringAfterReplacing = newStringAfterReplacing + text.charAt(i)  ;
        }
        return newStringAfterReplacing ;
    }

    public static  String getUserNameFromEmail(String email){
        String userName="";
        for(int i=0;i<email.length();i++){
            if(email.charAt(i) == '@'){
                break;
            }else{
                userName+=email.charAt(i);
            }
        }
        return userName;
    }
}