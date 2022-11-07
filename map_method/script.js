const numbers=[450,120,321,122,50,21];

function getSum(value,index){
    console.log(value,index)
}

numbers.map(getSum);    ///map method can be used for get arrays' elements,index and array... and create new array

const marks=[58,24,81,91,56,28,36];

const marksWithBonus=marks.map(marks=>(marks*1.15).toFixed(2));

console.log('Marks: ',marks);
console.log('Marks with bonus: ',marksWithBonus);

//// we use map method to create a new array with modification using existing array.