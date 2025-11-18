let text = "Please Please locate where 'locate' occurs!";
console.log(text.indexOf("locate")); // 14
console.log(text.lastIndexOf("locate")); // 28
// both return -1 for not found

let textLastIndexOfReverse = "Please locate where 'locate' occurs!";
console.log(textLastIndexOfReverse.indexOf("locate", 15)); // 21
console.log(textLastIndexOfReverse.lastIndexOf("locate", 15)); // 7

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular