// Ludu khelai amra kivabe 1 theke 6 shongkha randomly print korte pari?
function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (6 - 1 + 1)) + 1);
}

console.log(getRandomNumber(1, 6));

console.log(Math.floor((Math.random() * (6)) + 1));
console.log(Math.floor((Math.random() * (5) + 15)));
console.log(`21 to 23: `, Math.floor(Math.random() * (2 + 1) + 21));



// kivabe amra class e sokoler nam alphabetically shajate pari...
const students = ["Sumit", "Saad", "Daiyan", "Akahs"];

// console.log(students.sort()); // modify the original array
console.log(students.toSorted()); // return new array


// kivabe amra class e shokoler roll number kromo onujae shajate pari?
const roll_numbers = [3, 5, 1, 6, 2, 30];

console.log(roll_numbers.sort(function (a, b) {
    return a - b;
}));
console.log(roll_numbers.sort(function (a, b) {
    return b - a;
}));

// kon shal Leap Year ki na ta ber korte pari kivabe?
function isLeapYear(year) {
    if (year % 400 === 0 || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year!`);
    } else {
        console.log(`${year} is not a leap year!`);
    }
    return
}

isLeapYear(2008);

// kono sentence e koto gulo vowel ache ta nirlony kor jai ki vabe?
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function countVowels(sentence) {
    let count = 0;

    const letters = Array.from(sentence);

    letters.forEach(function (value, index, array) {
        if (vowels.includes(value)) {
            count++;
        }
    });

    return count;
}

console.log(countVowels("I love Bangladesh"));

// kono array theke duplicate number gulo ki vabe ber kore ante pari
/* const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const duplicates = numbers.filter(function (value, index, array) {
    return array.indexOf(value) !== index
})

console.log(duplicates); */

// kono array theke unique number gulo ki vabe ber kore ante pari
const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const duplicates = numbers.filter(function (value, index, array) {
    return array.indexOf(value) === index
})

console.log(duplicates);


/* What does the Math.round() method do?

// Math.round() method of Math object returns the value of a number rounded to the nearest integer. 
console.log(Math.round(2.6)); // 3
console.log(Math.round(2.4)); // 2
console.log(Math.round(2.5)); // 3
*/

/* What do the Math.ceil() and Math.floor() methods do?

// ceil method returns the nearest larger integer and floor method returns the nearest smaller integer

console.log(Math.ceil(2.6)); // 3
console.log(Math.floor(2.6)); // 2
*/

/* What is the purpose of the Math.max() and Math.min() methods?

console.log(Math.max(1, 2, 3, 4)); // 4
console.log(Math.min(1, 2, 3, 4)); // 1
*/





