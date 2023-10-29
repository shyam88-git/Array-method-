let data=[
    {id:20 , name:'Shyam'},
    {id:30 , name:"Harish"},
    {id:40 , name:"Ram"},
    {id:50,name:"Karna"}
];


console.log(data.find((item)=>item.id>20));
console.log(data.find((item)=>item.id<50));

console.log(data.find((data)=>data.name==='Ram'));


