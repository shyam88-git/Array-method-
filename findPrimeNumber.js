function findPrime(arr){

    let primeNum=arr.find((ele)=>ele%2!==0);
    return primeNum;


}
console.log(findPrime([2,4,5,10,12,20]));