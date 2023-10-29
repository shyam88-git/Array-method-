function findArray(arr){

   let findArr= arr.find((ele)=>{

        return ele<50;


    });
  
    return findArr;


}
console.log(findArray([10,20,30,40,50,60]));