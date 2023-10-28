function spliceArr(arr){

    let newArr=arr.splice(1,2);
    return newArr.length;
    


}
console.log(spliceArr([10,20,30,40,50,60,80]));