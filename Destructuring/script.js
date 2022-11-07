/*
    Destructuring can be used
            -to extract values from arrays into variables
            -to extract values from objects into variables
*/


//-------->extract values from array
const subjects=['Sinhala','Buddhism','Maths','Commerce','Art','Law'];

let [subject1,subject2]=subjects;
console.log(subject1);
console.log(subject2);

let [,,,subject4,subject5]=subjects;
console.log(subject4);
console.log(subject5);

//-------------> use spread operator get array values to a another array
let [,,,...others]=subjects;
console.log(others);

//-------->extract values from Object
const subjectResults={
    sinhala:55,
    buddhism:68,
    maths:72,
    commerce:84,
    art:89,
    law:{
        firstAttempt:25,
        secondAttempt:45
    }
}
const {sinhala}=subjectResults;
console.log(sinhala);

const{commerce,art}=subjectResults;
console.log(commerce);
console.log(art);

const {law}=subjectResults;
console.log(law);

///////////////////////////////////////////////////////////////////////////
/////////give arguments(array values) to a function (Destructuring)

function add([num1,num2,num3]){
    console.log('Sum: ',num1+num2);
}
const numbers=[1000,66,25,45];

add(numbers);


///////////////////////////////////////////////////////////////////////////
/////////give arguments(object values) to a function (Destructuring)

const book={
    costPrice:7500,
    sellPrice:8500,
    othercost:10
};

function calProfit({costPrice,sellPrice}){
    console.log('Profit: ',sellPrice-costPrice);
}

calProfit(book);