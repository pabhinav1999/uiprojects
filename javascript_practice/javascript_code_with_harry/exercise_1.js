let enteredNumber = 35;
let generatedNumber ;
let guess = 0;
do{ 
    generatedNumber = Math.floor(Math.random() * 100);
    console.log(generatedNumber);
    guess++;
}while(generatedNumber !== enteredNumber)
console.log('your score',100-guess);