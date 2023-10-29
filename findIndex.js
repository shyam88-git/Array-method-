function findIndexArr(arr){

    let index=arr.findIndex((ele)=>ele<40);
    return index;


}
console.log(findIndexArr([10,20,30,40,50]));