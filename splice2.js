let arr=[10,20,30,40,50];

let fruits=["amit","sumit","anil","preteek"];

arr.splice(1,0,3,4,5);
console.log("After splice op");
console.log(arr);

arr.splice(1,2);
console.log("After splice op");
console.log(arr);

// fruits.splice(0,2);
// console.log("After splice op");
// console.log(fruits);

fruits.splice(1,2,"Binod","Sher","Puran");
console.log("After splice op");
console.log(fruits);