class Person{

    constructor(fname,lname,birthday){
      this.Firstname=fname;
      this.Lastname=lname;
      this.dob=birthday;
    }

   calculateAge(){
    let birthday=new Date(this.dob);
    let diff=Date.now()-birthday.getTime();
    let ageDate=new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
   } 

   fullname(){
    console.log(this.Firstname,this.Lastname);
   }
}

let person1=new Person("Arifen","fahim","01-02-1988");
console.log(person1.fullname());
console.log(person1.calculateAge());
console.log(person1);