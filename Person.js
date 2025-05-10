class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getPerson(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }

}

let person = new Person("Krishna", 25);

console.log(person.getPerson.apply(person, [])); // Output: Name: Krishna, Age: 25