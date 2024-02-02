class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // Method to display details of the person
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}

// Creating instances of the Person class
const person1 = new Person("John Doe", 25, "Male");
const person2 = new Person("Jane Doe", 30, "Female");

// Displaying details of the persons
person1.displayDetails();
person2.displayDetails();

//OUTPUT

// Name: John Doe, Age: 25, Gender: Male
// Name: Jane Doe, Age: 30, Gender: Female