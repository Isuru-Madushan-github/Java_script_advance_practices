const marks=[85,26,12,78,61,22];

function addBonusMarks(marks,index){
    console.log(`${index}: ${marks+10.5}`);
}

marks.forEach(addBonusMarks);

// for each method sends array elements,index and array to callback function.

