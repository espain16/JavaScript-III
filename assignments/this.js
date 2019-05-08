/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: if "this" doesn't have a value then it will look outside the function      for the nearest value.
* 2. Implicit binding: the value or object thats preceeded by the dot is what "this" will       consist of. 
* 3. New binding:  is when a constructor function returns an object "new" is used to show       this.
* 4. Explicit binding: whenevr the methods .call and .apply are used we can chnage the          initial objects that were put into place.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function favVideoGame(name){  

    console.log(this);
       return name;
}
favVideoGame("Zelda");

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    name: 'Elise',
    food: 'pizza!',
    eat: function(){
        console.log(`${this.greeting}, my name is ${name} and I'm obssessed with ${food}`)
    }    

    
};
myObj.eat();

// Principle 3

// code example for New Binding
function NicePerson(obj){
    
    this.name = obj.name;
    this.hobby = obj.hobby;
    this.shout = function (){
        console.log(`I'm ${this.name}my favorite pass time is ${hobby}`);    
        console.log(this);
    };

}
const Martha = new NicePerson('Chandler');
const Chandler = new NicePerson('Martha');

Chandler.shout();
Martha.shout();
// Principle 4

// code example for Explicit Binding
const person = {
    "name": "Ruby"
  }
  
  const snacks = ["pizza","reeses","cupcakes"]
  
  function introduction(pizza,reeses,cupcakes){
    return `Hello, my name is ${this.name} and I like to eat:${pizza},${reeses}, ${cupackes}`;
  }
  console.log(introduction.call(person,pizza,reeses,cupcakes))