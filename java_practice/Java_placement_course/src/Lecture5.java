
/*
* * * * *
* * * * *
* * * * *
* * * * * 
*/ 
class Lecture5 {
    public static void main(String args[]) {
        for(int i=1;i<5;i++){
            for(int j=1;j<6;j++){
                System.out.print("* ");
            }
           System.out.println("");
        }
        System.out.println();
        System.out.println();
        System.out.println();

        for(int i=1;i<5;i++){
            for(int j=1;j<6;j++){
                if(i==1 || i==4 || j==1 || j==5)
                System.out.print("*");
                else
                System.out.print(" ");
            }
           System.out.println();
        }
        
        System.out.println();
        System.out.println();
        System.out.println();

        for(int i=1;i<5;i++){
            for(int j=1;j<=i;j++)
            System.out.print("*");
          System.out.println();
        }
        
        
        System.out.println();
        System.out.println();
        System.out.println();

        for(int i=1;i<=5;i++){
            for(int j=1;j<=5-i;j++) 
                System.out.print("*");
            System.out.println();
        }

        System.out.println();
        System.out.println();
        System.out.println();

        for(int i=5;i>=1;i--){
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }

        System.out.println();
        System.out.println();
        System.out.println();

        for(int i=1;i<=5;i++){
            for(int j=1;j<=5-i;j++)
                System.out.print(" ");
            for(int j=1;j<=i;j++)
                System.out.print("*");
        System.out.println();
        }

        
        System.out.println();
        System.out.println();
        System.out.println();


        for(int i=1;i<=5;i++){
            for(int j=1;j<=i;j++){
                System.out.print(j);
            }
            System.out.println();
        }

        
        System.out.println();
        System.out.println();
        System.out.println();

        for(int i=1;i<=5;i++){
            for(int j=1;j<=5+1-i;j++)
                System.out.print(j);
            System.out.println();
        }

        
        System.out.println();
        System.out.println();
        System.out.println();
        
        int sum=0;
        for(int i=1;i<=5;i++){
            for(int j=1;j<=i;j++){
                sum+=1;
                System.out.print(sum+" ");
            }
            System.out.println();
        }

        System.out.println();
        System.out.println();
        System.out.println();

        for(int i=1;i<=5;i++){
            for(int j=1;j<=i;j++){
                if(i%2 == 1 && j%2 == 1)
                        System.out.print("1");
                else if(i%2 == 1 && j%2 == 0)
                        System.out.print("0");
                else if(i%2 ==0 && j%2 ==1 )
                        System.out.print("0");
                else
                        System.out.print("1");
            }
            System.out.println();
        }

        System.out.println();
        System.out.println();
        System.out.println();


        for(int i=1;i<=5;i++){
            for(int j=1;j<=i;j++){
                int sum1 = i+j;
                if(sum1%2 == 0)
                System.out.print("1");
                else
                System.out.print("0");
            }
            System.out.println();
        }
    }
}