/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global scope means if "this" doesn't have a value then it will look outside the function for      the nearest value.
* 2. Implicit Binding: the value or object thats preceeded by the dot is what "this" will consist of.
* 3. New binding: is when a constructor function returns an object "new" is used to show this. 
* 4. Explicit binding: whenevr the methods .call and .apply are used we can chnage the initial objects that were put into place.
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

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding