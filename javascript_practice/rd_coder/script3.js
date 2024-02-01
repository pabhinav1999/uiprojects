let students = [
    { name: "Piyush", rollno: 67, marks: 80 },
    { name: "Sara", rollno: 34, marks: 95 },
    { name: "John", rollno: 12, marks: 35 },
    { name: "Emily", rollno: 45, marks: 20 },
    { name: "Raj", rollno: 89, marks: 85 }
];

//print the student names
//tarditional for loop

let names = [];
for(let i=0;i < students.length ; i++){
    names.push(students[i].name)
}

console.log(names);


let namesForEach = [];
students.forEach((student) => namesForEach.push(student.name));
console.log(namesForEach)

console.log(students.map((student) => student.name));

//return names of students who score than 60 marks
console.log(students.filter((student) => student.marks > 90).map((student) => student.name))

// add grace marks of 20 marks for students who scored less than 60 and take sum of the marks of students who scored less than 60

const sum = students.map((student) => {
    if(student.marks < 60)
      student.marks+= 20;

      return student;
}).filter((student) => student.marks < 60).reduce((acc, curr_value) => acc + curr_value.marks, 0);
console.log(sum);
