const person = {
  name: "Prince",
  lname: "babu",
  age: 20,

  getP: function () {
    console.log(`${this.name} ${this.age} ${this.lname} `);
  },
};

// person.getP();

// constructor function => PascalCasing
// Before Es6
function Person(fname, lname, contacts) {
  this.fname = fname;
  this.lname = lname;
  this.contacts = contacts;

  this.getName = function () {
    console.log(this.fname, this.lname);
  };
}

const person1 = new Person("Prince", "Babu", "9999999999");
const person2 = new Person("Aman", "Singh", "9999999999");

person2.getName();

class User {
  constructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
  }

  getContact() {
    console.log(this.contact);
  }

  getName() {
    console.log(this.fname, this.lname);
  }
}

const u1 = new User("prince", "rathore", 9758888888);

u1.getName();

let s = "javascript";

function reverseString(s) {
  let left = 0;
  let end = s.length - 1;
  let arr = s.split("");

  while (left < end) {
    [arr[left], arr[end]] = [arr[end], arr[left]];
    left++;
    end--;
  }

  return arr.join();
}

s = reverseString(s);
console.log(s);
