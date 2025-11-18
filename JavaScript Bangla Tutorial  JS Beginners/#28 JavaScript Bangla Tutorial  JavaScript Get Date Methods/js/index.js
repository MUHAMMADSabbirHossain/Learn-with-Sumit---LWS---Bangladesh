console.log(new Date());
console.log(Date.now()); // milisecond

console.log(new Date().getTime()); // milisecond scince 1970
console.log(new Date(2024, 1).getTime()); // milisecond

const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
console.log(new Date().getMonth()); // return index
console.log(months[new Date().getMonth()]);

