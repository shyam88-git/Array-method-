let arr=[10,20,30,40,50,60];

let isTrue=arr.some((ele)=>{

    return ele>50


});
console.log(isTrue);

let isFalse=arr.some((ele)=>{

    return ele>60
});
console.log(isFalse);
