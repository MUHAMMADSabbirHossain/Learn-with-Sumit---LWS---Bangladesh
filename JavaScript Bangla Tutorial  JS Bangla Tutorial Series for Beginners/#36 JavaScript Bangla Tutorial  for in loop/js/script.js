const person = { fname: "John", lname: "Doe", age: 25 };

for (let x in person) {
    // console.log(person[x]); // undefine
    // console.log(x) // property of object
    console.log(person[x]); // person["fname"]
}

const numbers = [45, 4, 9, 16, 25];
for (let number in numbers) {
    // console.log(number); // index of array

    console.log(numbers[number]); // value of array
}