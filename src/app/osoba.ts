export class Osoba {

    firstName : string;
    lastName : string;
    age? : number;
    city? : string;
  
    constructor(firstName : string, lastName : string, age? : number, city? : string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.city = city;
    }
}
