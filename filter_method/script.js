/*
    we can use filter method for filter values under conditions in a array.

*/


const discounts=[12,20,8,4,5,15,18];

function selectDiscounts(discount){
    if(discount<10){
        return discount;
    }
}

const minimumDiscounts=discounts.filter(selectDiscounts);

console.log(discounts);
console.log(minimumDiscounts);

const studentDetails=[
    {studentId:1 , name:'Isuru', age:25 , gender:'Male'},
    {studentId:2 , name:'Hirushi', age:23 , gender:'Female'},
    {studentId:3 , name:'Dilshan', age:26 , gender:'Male'},
    {studentId:4 , name:'Kasun', age:21 , gender:'Male'},
    {studentId:5 , name:'Kaushi', age:20 , gender:'Female'}
];

console.table(studentDetails);

const studentsUnder25=studentDetails.filter(studentDetails=>studentDetails.age<25);

console.table(studentsUnder25);

const maleStudents=studentDetails.filter(studentDetails=>studentDetails.gender=='Male');

console.table(maleStudents);



