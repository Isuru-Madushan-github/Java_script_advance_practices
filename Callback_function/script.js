/////// we use callback function in asyncronous programming


// function function1(){
//     console.log('this is function 1');
//     function2();    
// }

function function2(randnum){
    console.log('this is function 2');
    console.log(randnum);
}

    //////callback function--pass a function as a argument of a another function
// function function3(callbackFunction){
//     console.log('this is function 3');
//     callbackFunction();
// }

// function1();

// function3(function2);

function function4(callbackFunction){
    console.log('this is function 4');

    const randnum=Math.random();
    callbackFunction(randnum);      ////// give arguments to callback function
}

function4(function2);