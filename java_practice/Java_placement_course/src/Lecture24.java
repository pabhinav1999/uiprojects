//OOPS in java
class Pen {
    String color;
    String type;

    public void write(){
        System.out.println("Write Something");
    } 

    public void printInfo(){
        System.out.println(this.color);
        System.out.println(this.type);
    }
}

class Student {
    String name;
    int age;

    Student(String name,int age){
        this.name = name;
        this.age = age;
    }
    
    Student(){

    }
    public void printInfo(){
        System.out.println(this.name);
        System.out.println(this.age); 
    }
    //copy constructor
   // copies the information of other instance to newer instance
   Student(Student s2){
    this.name = s2.name;
    this.age = s2.age;
   }
}

class Lecture24 {
    public static void main(String[] args){
        Pen pen1 = new Pen();
        Student student1 = new Student();
        Student s3 = new Student("Abhilash",22);
        student1.name = "Abhinav";
        student1.age = 24;
        pen1.color="black";
        pen1.type="ballpoint";
        pen1.printInfo();
        student1.printInfo();
        Student s2 = new Student(student1);
        s2.printInfo();
        s3.printInfo();

    }
}