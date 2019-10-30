// const add =function (a,b){
//     console.log(arguments);
//     return a+b;
// }

const add = (a,b)=>{
   // console.log(  );
    return a+b;
};
console.log(add(43,2,12));

// //does not work
// const user = {
//     name :'Yassin',
//     cities:['Philadelphia','New York', 'Dublin'],
// printPlacesLived: function (){
    // console.log(this.name);
    // console.log(this.cities); 
//     this.cities.forEach(function(city){
//     console.log(this.name + ' has lived in ' + city);
//     });
//     }
// };  
// user.printPlacesLived(); 
   
const user = {
    name :'Yassin',
    cities:['Philadelphia','New York', 'Dublin'],
// printPlacesLived: function (){
    printPlacesLived(){
// console.log(this.name);
// console.log(this.cities); 

// const cityMessages = this.cities.map((city)=>{
// return this.name + ' has lived in ' + city  ;
// })
// return cityMessages;
const cityMessages = this.cities.map((city)=>  this.name + ' has lived in ' + city ) ;
    return cityMessages;
 
    // this.cities.forEach((city) => {
    // console.log(this.name + ' has lived in ' + city);
    // });
    }
};  
console.log(user.printPlacesLived());
//user.printPlacesLived(); 


 
//challenge area 
const multiplier= {
    numbers:[1,3,5,7,4],
    multiplyBy:3,
    multiply(){
        return this.numbers.map((num)=> this.multiplyBy*num);
     //return result;
    }
   
};

console.log(multiplier.multiply());