// OOPS Practice
import java.util.*;
import bank.*;

class Shape {
    public void area(){
        System.out.println("Area calculation");
    }
}

//Single level inheritance
class Triangle extends Shape {
     int l,h ;
    // public Triangle(int l,int h){
    //   this.l = l;
    //   this.h = h;
    // }
    public void area(int l,int h){
        System.out.println( 1/2*l*h);
    }
}

//Multilevel inheritance
class EquilateralTriangle extends Triangle {
    public void area(int l,int h){
        System.out.println(1/2*l*h);
    }
}

//Hierachial inheritance
class Circle extends Shape {
    public void area(int r){
        System.out.println(3.14*r*r);
    }
}


class Student {
    String name;
    int age;
    //different functions in same class with atleast one differential factors
    //polymorphism
    public  void printInfo(String name){
        System.out.println(name);
    }

    public  void printInfo(int age) {
        System.out.print(age);
    }

    public  void printInfo(String name,int age){
        System.out.println(name+" "+age);
    }
}
public class Lecture24_1 {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Virat";
        s1.age = 32;
        s1.printInfo(s1.name,s1.age);
        s1.printInfo(s1.name);
        practiceInheritance();
    }

    public static void practiceInheritance(){
        EquilateralTriangle t1 = new EquilateralTriangle();
        t1.l = 3;
        t1.h = 4;
        t1.area(t1.l,t1.h);
    }

    public static void usePackage(){
    }
}

