// Array destructing 
/*const fruits = ["apple", "mango", "orange"]

const [first, second,third] = fruits;

console.log(first)
console.log(second)
console.log(third)
*/

//skipping element
/*const colours =["Red", "Green","blue","yellow"]

const[first, second, , fourth] = colours

console.log(first)
console.log(second)
console.log(fourth)
*/
//default values - adding another value to the array

//const numbers = [10]

/*const [a, b = 20] = numbers
console.log(a)
console.log(b)
*/
//object destructing

const person = {
    name: "subomi",
    age: 30,
    city :"sagamu"
}

const{ name, age, city} = person;

console.log(name);
console.log(age)
console.log(city)