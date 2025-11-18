// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function () { return 0.5 - Math.random() });

// console.log(points);
// console.log(points.reverse());
// console.log(points.sort().reverse());




const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Strawberry", "Blueberry", "Papaya", "Guava"];
// modifying the original array
console.log(fruits);
console.log(fruits.reverse());
console.log(fruits.sort());
console.log(fruits.sort().reverse());

const points = [40, 100, 1, 5, 40, 25, 10];
console.log(points);
points.sort(function (a, b) { return a - b });

console.log(points);
console.log(Math.max(...points));
console.log(Math.max.apply(null, points));
console.log(Math.min(...points));
console.log(Math.min.apply(null, points));


const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
    { type: "Fiat", year: 1999 },
    { type: "Audi", year: 2018 },
    { type: "Ford", year: 2005 },
    { type: "Nissan", year: 1995 },
];

console.log(cars.toSorted(function (a, b) { return a.year - b.year }));
console.log(cars.sort(function (a, b) {
    if (a.type.toLowerCase() < b.type.toLowerCase()) return -1;
    if (a.type.toLowerCase() > b.type.toLowerCase()) return 1;
    return 0;
}));






