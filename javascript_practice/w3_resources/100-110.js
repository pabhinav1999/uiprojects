//100. Check whether there is at least one element which occurs in two given sorted arrays of integers

let q100arr1 = [1,2,3,5];
let q100arr2 = [4,6,7,8];

function checkCommonElement(arr1,arr2){  
    const itrLength = Math.min(arr1.length,arr2.length);
    let i = 0; // pointer for first array
    let j = 0; // pointer for second array
    while(i < itrLength && j < itrLength){
       if( arr1[i] == arr2[j]){
        return true;
       }else if(arr1[i]> arr2[j]){
          j++;
       }else {
         i++;
       }
    }
    return false;   
}

console.log(checkCommonElement(q100arr1,q100arr2));

//101. Write a JavaScript program to check whether a given string contains
//  only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.

