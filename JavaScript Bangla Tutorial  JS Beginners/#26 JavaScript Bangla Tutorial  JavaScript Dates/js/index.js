// There are 9 ways to create a new date object:
console.log(Date()); // constructor
console.log(new Date()); // constructor

console.log(new Date("2022-03-25")); // date string
console.log(new Date("October 13, 2014 11:13:00")); // date string


console.log(new Date(2000, 1, 1, 0, 0, 0, 0)); // year,month,day,hours,minutes,seconds,ms
console.log(new Date(100000000000)); // milisecond
console.log(new Date(-100000000000)); // negetive


// previous century
console.log(new Date(570, 11));
console.log(new Date(9, 11));


// display date
console.log(new Date().toString()); // auto or default
console.log(new Date().toDateString()); // more readable
console.log(new Date().toUTCString()); // utc
console.log(new Date().toISOString()); // iso
console.log();
