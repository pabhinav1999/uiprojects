//150.Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
//Eg.123456 -> 214365

let a = 123456;
let arr = Array.from(a.toString());
for( let i=0;i<arr.length-1;i+=2){
    let temp = arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=temp;
}
console.log(Number.parseInt(arr.join('')));

//149.change the capitalization of each letter in a given string

let str = "w3resource" ;
return 


