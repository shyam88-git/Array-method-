let arr=[10,20,30,24,25,34];
console.log(arr.every((ele)=>ele<40));

console.log(arr.every((ele)=>ele>40));


//arr 1 includes the same variable like arr1

let arr1=[10,20,30,40,50];
let arr2=[10,20,30,40,50];

console.log(arr1.every((ele)=>arr2.includes(ele)));


