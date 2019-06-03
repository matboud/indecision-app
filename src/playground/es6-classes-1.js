class Person {
  constructor(name = "none", age = 0) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `hello im ${this.name}!`;
  }

  getDescription() {
      return `${this.name} is ${this.age} years old`
  }
}

class Student extends Person{
    constructor(name, age, description){
        super(name, age);
        this.description = description;
    }

    testo(){
        return `hello ${this.description}`
    }
}

class Traveler extends Person{
    constructor(name, age, description, location){
        super(name, age, description);
        this.location = location;
    }

    gotLocat(){
        return !!this.location;
    }

    whatToSay(){
        let location = super.getDescription();

        if(this.gotLocat()){
            location += ` hes from ${this.location}`;
        }

        return location;
    }
}

const me = new Traveler("matboud", 23, 'GL', 'kenitra');
console.log(me.whatToSay());

const other = new Traveler();
console.log(other.whatToSay());
