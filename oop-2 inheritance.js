class Person {
  constructor(fname, lname) {
    this.Firstname = fname;
    this.Lastname = lname;
  }

  greeting(){
    console.log(`hello ${this.Firstname} ${this.Lastname}`)
  }
}

class costumer extends Person {
  constructor(fname, lname, phone, id) {
    super(fname, lname);
    this.phoneNumber = phone;
    this.IDNumber = id;
  }
}

let person1=new Person("Arifen","fahim");
console.log(person1);
let costumer1=new costumer("Radoanul","Arifen","01632665398","221-15-5284");
console.log(costumer1);
console.log(costumer1.greeting());
