console.log(this);

var a= 5;
console.log(this.a);
function getParams(){
    console.log(this.a);  //immediate parent is global scope here
}
getParams();

let user = {
    name : 'Alexander',
    age : 77,
    getName: function() {
        console.log(this.name)
    }
}

let user2 = {
    name: 'Gracia',
    age: 67,
    getNameArrow : () => {
        console.log(this);
        return this.name
    }
}

user.getName();
console.log(user2.getNameArrow())
