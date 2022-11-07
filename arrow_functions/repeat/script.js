function add(a,b){
    return a+b;
}
console.log('Add function Result: '+add(10,10));

const add1=function(a,b){
    return a+b;
}
console.log('Add1 function result: '+add1(23,12));

const add2=(a,b)=>{
    return a+b;
}
console.log('Add2 function result: '+add2(52,48));

const add3=(a,b)=>a+b;
console.log('Add3 function result: '+add3(33,18));

const multiply= x => x*x;
console.log('Multiply: '+multiply(24));

setTimeout(function(){
    console.log('3 seconds passed!')
},3000);

setTimeout(()=>{
    console.log('4 seconds passed!')
},4000);

(function(){
    console.log('I am from self invoked Anonymous Function');
})();

(()=>{

console.log('I am from self invoked Anonymous Arrow Function');
})();

const Person={
    firstName:'Isuru',
    lastName:'Madushan',
    sayFullName: function(){
        console.log('My Name is '+this.firstName+' '+this.lastName);
        (()=>{
            console.log('I am a self invoked function. I belong to '+this.firstName);
        })();
    }
}
Person.sayFullName();

