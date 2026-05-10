const names = ["Ada", "Tolu", "Emeka", "Sade", "Bayo"];
const scores = [45, 82, 30, 91, 67, 55, 78];

const nameUpper = names.map((name) => name.toUpperCase());

const passPeeps = scores.filter((score) => score > 60);

const greetNames = names.map((name) => `Hello  ${name}`);

const shortNames = names.filter((name) => name.length <= 3);

console.log(nameUpper);
console.log(passPeeps);
console.log(greetNames);
console.log(shortNames);

const student = {
  name: "Emeka",
  course: "Frontend Dev",
  age: 21,
  city: "Abuja",
};

const { name, course } = student;
console.log(name, course);

const { grade = "95" } = student;
console.log(grade);
const { city: userLocation } = student;
console.log(userLocation);

const marks = [95, 80, 72, 60, 45];
const fruits = ["mango", "pawpaw", "banana", "orange"];

const [first, second] = marks;
const [, secondFruit] = fruits;
const [firstFruit, ...otherFruits] = fruits;

console.log(first, second, secondFruit, firstFruit, otherFruits);

const product = {
  name: "Laptop",
  price: 400000,
  brand: "HP",
  inStock: true,
};
