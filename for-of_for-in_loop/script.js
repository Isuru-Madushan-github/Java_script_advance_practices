////basic for loop

for(let a=1;a<13;a++){
    document.write(`13 x ${a} = ${a*13} <br>`);
}


/////////////////////////////////////////////////////////////

const names=['Isuru','Lakshan','Mudith','Kasun','Dananjaya'];

//basic for loop for read array values
for(let i=0;i<names.length;i++){
    document.write(names[i],"<br>");
}

//for of loop----read values of an array
for(const values of names){
    document.write(values,'<br>');
}

/////get values with index using for in loop(Deatructuring)
for(const[index,values] of names.entries()){
    document.write(index,' ',values,'<br>');
}


///for in loop----read values of an object
const product={
    productId:00223,
    code:45156,
    productName:'####',
    price:120,
}

for(const key in product){
    document.write(key,': ',product[key],'<br>');
}



