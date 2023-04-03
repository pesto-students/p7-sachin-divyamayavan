const Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

function Teacher() {
    Person.call(this);
};

Teacher.prototype.teach = function (subject) {
    this.subject = subject;
    return `${this.name} is now teaching ${this.subject}`;
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);
const professor = new Teacher();

professor.initialize("Divyabharathi", 23)
console.log(professor.teach('Inheritance'));