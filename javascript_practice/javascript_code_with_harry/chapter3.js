//1.Write a program to print the marks of an object through for loop

const obj = {
    Harry:98,
    Shiva:35,
    Green:36
}

for(let key in obj){
    console.log('Marks of'+key+'is '+obj[key]);
}
