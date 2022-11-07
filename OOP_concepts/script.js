class Students{
    constructor(fName,lName){
        this.firstName=fName;
        this.lastName=lName;
    }

    introduce(){
        console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
    }
    get fullName(){     //Get keyword===> we can use get keyword to create method and use return value like a class property.
        return `${this.firstName} ${this.lastName}`;
    }
}

class PayedStudents extends Students{

    static iqLevel='high';  /*when we create a variable or method by using static keyword..then we can call that variable or method 
                                without creating a object of the class.
                            */

    #salary;    //private------>encapsulation

    constructor(fName,lName,post,salary){
        super(fName,lName);
        this.post=post;
        this.#salary=salary;
    }
    introduce(){
        console.log(`Hi, my name is ${this.firstName} ${this.lastName} and I am a ${this.post} and my salary is ${this.salary}`);
    }
    showSalary(){
        console.log(`My true salary is ${this.#salary}`);
        this.#showPost();
    }
    #showPost(){    //Private method.cannot access to this from outside of this class.
        console.log(`My post is ${this.post}`)
    }
}
const isuru=new Students('Isuru','Madushan');
const kasun=new PayedStudents('Kasun','Kalhara','Head Prefect',1500);

isuru.introduce();
kasun.introduce();


kasun.salary=2500; // private properties cannot access like this. when we called like this they created a new salary property.


console.log(kasun.salary);  /*when we create a property of a class by default,then we can call,modify that property from outside of its class.
                            To avoid that, we can create properties as private(#salary).then we cannot access that property from outside of its class.   
                            */

kasun.showSalary();  

console.log(isuru.fullName); // we can access fullName method like a property==>without ()

console.log(PayedStudents.iqLevel);