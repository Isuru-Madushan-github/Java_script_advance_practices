/*
    we can use spread operator
            -to join JS arrays
            -to pass array elements to a function as arguments
            -to join JS objects 

*/

//Join arrays
const vehicles1=['Suzuki','Nissan','BMW','Mercedes'];
console.log(vehicles1);

const vehicles2=['Chevrolet','Honda','Buggati','Audi'];
console.log(vehicles2);

const totalVehicles=[...vehicles1, ...vehicles2];
console.log(totalVehicles);


//Pass array elements as a function argument
const numbers=[4,7];

function add(num1,num2){
    console.log('Sum: ',num1+num2);
}

add(numbers[0],numbers[1]);

//Pass array elements as a function argument using spread operator
add(...numbers);


//Join objects
const StudentDetails={
    id:1234,
    firstname:'Isuru',
    lastname:'Madushan'
};
console.log(StudentDetails);

const anotherDetails={
    age:25,
    gender:'Male',
    occupation:'webdeveloper'
};
console.log(anotherDetails);

const fullDetails={...StudentDetails, ...anotherDetails};
console.log(fullDetails);