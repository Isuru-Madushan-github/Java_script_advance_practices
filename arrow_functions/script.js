function add1(a,b){
    return a+b;
}     //normal function
console.log("Result 1:", add1(10,10));


const add2=function(a,b){
    return a+b;
}   //another way for create funtion
console.log("Result 2:", add2(20,10));

const add3=(a,b)=>{
    return a+b;
}   //arrow funtion 
console.log("Result 3:", add3(30,10));

const add4=(a,b)=> a+b; //arrow funtion another way
console.log("Result 4:", add4(40,10));

const multiply = x => x*x;  //arrow function another way
console.log("Result 5:",multiply(9));

setTimeout(function(){console.log("3 Seconds passed");},3000);
//anonymous function

setTimeout(()=>{console.log("This is anonymous arrow function");},4000);
//anonymous arrow function

(function(){
    console.log("I am self invoked anonymous function");
})();   //self invoked anonymous function

(()=>{console.log("This is self invoked anonymous arrow function");})();
//self invoked anonymous arrow function



let firstName="Yamuna";
let lastName="Priyanthi";

const person={
    firstName:"Isuru",
    lastName:"Madushan",
    sayFullName(){console.log(this.firstName, this.lastName);}
};

person.sayFullName();
console.log(firstName);