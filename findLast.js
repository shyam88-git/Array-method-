function findLastArr(arr){

    let findLast=arr.findLast((ele)=>ele>5);
    return findLast;
    


}
console.log(findLastArr([7,4,2,8,5,9]));