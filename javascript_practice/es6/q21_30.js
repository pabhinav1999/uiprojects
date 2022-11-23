// 21.Write a JavaScript program to get every nth element in a given array.

const every_nth = (arr,nth)=> arr.filter((e,i)=> i%nth === nth-1);
console.log(every_nth([1,2,3,4,5],2));
console.log(every_nth([1,2,3,4,5],3));

// 22.Write a JavaScript program to filter out the non-unique values in an array.
const non_unique_values = (arr)=> arr.filter((e)=> arr.indexOf(e) === arr.lastIndexOf(e));
console.log(non_unique_values([1,2,2,2,3,3,4]));

//23.hard

// 24. Write a JavaScript program to dcapitalize the first letter of a string
const dCapitalize = ([first,...rest],upperRest = false) => first.toUpperCase() + (upperRest? rest.join('').toUpperCase() :rest.join('') ) ;
console.log(dCapitalize('w3Resource'));
console.log(dCapitalize('red',true));
console.log('abc'.toUpperCase());

// 25.Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays
const every_possible_pair = (a,b) => a.reduce((acc,x)=> acc.concat(b.map(y => [x,y])),[]);
console.log(every_possible_pair(['a','b'],[1,2]));