function sayHi() {
  console.log('I am ' + this.name + '!');
}

var spiderman = {
  name: 'Spiderman',
  realName: 'Peter Parker',
  sayHi : sayHi
};
var superman = {
  name: 'Superman',
  realName: 'Clark Kent',
  sayHi : sayHi
};
spiderman.sayHi();
superman.sayHi();
function revealIdentify() {
  console.log('My real name is ' + this.realName + '.');
}

revealIdentify.apply(spiderman, []);
revealIdentify.apply(superman, []);
var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',

  showInfo: function () {
       for (var i in this) {
            if (typeof this[i] !== 'function') {
                 console.log(i + " " + this[i]);
            }
       }
 }
     //   console.log(firstName, this.firstName, lastName, this.lastName, eyeColor, this.eyeColor, hairColor, this.hairColor);
};


var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};
daughter.__proto__ = mom;
mom.showInfo();
daughter.showInfo();



function createPerson(name) {
     var person = {};
          person.name = name;
          person.friends = [];

     person.friends = [];
     person.createGreeting  = function(other) {
       return 'Yo ' + other.name + '! from ' + this.name + '.';
     };
     person.greet = function(other) {
       console.log(this.createGreeting(other));
     };
     person.lazyGreet = function (other) { setTimeout (function () {
          console.log(this.createGreeting(other));}.bind(this), 2000);
          };


     person.addFriend = function(friend) {
       this.friends.push(friend);
     };
     return person;
}
var carl = createPerson ("Carl");
var bob = createPerson ("Bob");
console.log(carl.name);
carl.lazyGreet(bob);
