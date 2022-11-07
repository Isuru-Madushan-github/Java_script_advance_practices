class Student{
    constructor(studentId,name){
        this.studentId=studentId;
        this.name=name;
    }

    getName(){
        console.log(`Student ID: ${this.studentId}
        Student Name: ${this.name}
        `);
    }
}
export default Student;