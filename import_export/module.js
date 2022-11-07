export const name='Isuru';

export function getSum(num1,num2){
    return num1+num2;
}

export function averageMarks(num1,num2,num3,num4,num5){
    console.log(`Average Marks: ${(num1+num2+num3+num4+num5)/5}`)
}


//we can export variables or methods like this without put export keyword to begining of the variables or methods.
        //export {name,getSum,averageMarks}; 

//And we can change the name of the variable or method what do we export.
        //  export{name as name1, averageMarks as newMarks,getSum}