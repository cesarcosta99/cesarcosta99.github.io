---
title:  "From ES2015 to ES2018"
description: "Check it out the main features that you can take advantage"
# date:
categories: javascript frontend
tags: ecmascript code
---

Hey guys! ES2015 brought a lot of new features and it's widely used in these days, the newer specifications not so much. My proposal on making this post is document these recent updates on ECMAScript to keep up with the main features we can already use in JavaScript. So let's get straight to the point.

## ES2015 or ES6

### Block-scoped declaration

`const` and `let` allows you to create declarations which are bound to any block.

{% highlight javascript %}
var animal = 'Dog'
{
    let animal = 'Cat'
    console.log(animal) // Cat
}
console.log(animal) // Dog
{% endhighlight %}

As the declaration suggests a `const` variable cannot be reassigned.

{% highlight javascript %}
const number = 1
number = 2 // TypeError: Assignment to constant variable

const person = { name: 'César' }
person = 'César' // TypeError: Assignment to constant variable
person.name = 'Joseph'
console.log(person) // { name: "Joseph" }
{% endhighlight %}

### Arrow functions

Arrow functions make the function declaration shorter but they also have a lexical context. Read more about how arrow functions work [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

{% highlight javascript %}
// Classical way
function sum (a, b) {
  return a + b
}

// Arrow function way
const sum = (a, b) => a + b
{% endhighlight %}

### Default function parameters

{% highlight javascript %}
const multiply = (a, b = 1) => a * b

multiply(9, 9) // 81
multiply(9) // 9
{% endhighlight %}

### Rest and Spread operator

{% highlight javascript %}
const sum = (...numbers) => numbers.reduce((sum, next) => sum + next, 0)

// Rest
sum(1) // 1
sum(1, 2, 3, 4, 5) // 15

// Spread
const numbers = [6, 7, 8]
sum(...numbers) // 21
{% endhighlight %}

Also works with objects:

{% highlight javascript %}
const defaultData = { isActive: true }
const data = { firstName: 'César', lastName: 'Costa' }
const newUser = { ...defaultData, ...data }

console.log(newUser) // { isActive: true, firstName: "César", lastName: "Costa" }
{% endhighlight %}

### Object literal extensions

{% highlight javascript %}
const newUser = (firstName, lastName, age, gender) => {
  return {
    firstName, // same as firstName: firstName
    lastName, // same as lastName: lastName
    age, // same as age: age
    gender // same as gender: gender
  }
}
{% endhighlight %}

### Destructuring

{% highlight javascript %}
// Array destructuring
const numbers = [1, 2, 3]
const [ a, b, c ] = numbers
console.log(a, b, c) // 1 2 3

// Object destructuring
const car = { brand: 'Chevrolet', model: 'Camaro' }
const { brand, model } = car
console.log(brand, model) // Chevrolet Camaro
{% endhighlight %}

### Template strings

{% highlight javascript %}
const name = 'César'

// Classical way
console.log('Hello, my name is' + name) // Hello, my name is César

// Template string way
console.log(`Hello, my name is ${name}`) // Hello, my name is César
{% endhighlight %}