import {name,getSum,averageMarks} from './module.js';
import Student from './class.js';       //import Student class

//we can change the name of the variable or method what do we import.
    //import {name as name1,getSum as sum,averageMarks} from './module.js'

console.log(name);

console.log(getSum(21,2));

averageMarks(45,21,56,78,42);

const isuru=new Student(121,'Isuru');
isuru.getName();