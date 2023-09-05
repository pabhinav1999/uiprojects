class Student {
    constructor(name,age,rolno){
        this.myname = name;
        this.myage = age;
        this.rollno = rolno;
    }

    bioData(){
        return ` My name is ${this.myname} , age is ${this.myage} and rollno is ${this.rollno} `;
    }
}



class Player extends Student {
    constructor(name,age,rollno,game){
        super(name,age,rollno);
        this.game = game;
    }

    bioDataOfPlayer(){
        return `${super.bioData()} and the game name is ${this.game}` ;
    }
}

let  obj1 = new Student('Abhinav',24,245);
console.log(obj1.bioData());


let obj2 = new Player('Abhilash',22,456,'Cricket');
console.log(obj2.bioDataOfPlayer());