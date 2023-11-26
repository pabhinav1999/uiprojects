var x = 7;
function getName() {
    console.log('variables and functions are called after initialization');
}
getName();
console.log(x);


console.log(y);
var y = 8;
getName2();
function getName2() {
    console.log('variables and functions are called before initialization');
}
console.log(y);


getName3();
var getName3 = () => {
    console.log('function is decalred in a variable and it behaves exactly as variable');
}

var getName5 = () => {
    console.log('Namaste Javascript5');
}
getName5();

getName6();
var getName6 = () => {
    console.log('Namaste Javascript5');
}



