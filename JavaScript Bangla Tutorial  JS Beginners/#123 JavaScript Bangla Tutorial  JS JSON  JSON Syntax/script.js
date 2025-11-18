const person = {
    name: "Sumit",
    age: 38,
    skills: ["programming", "educator"],
    book: {
        name: "Ekhono likhinai",
    },
    alive: true,
    disease: null,
    birthday: Date("13-8-1985"),
    test: function () {

    },
    testUndefined: undefined
};

// const person = '{"name": "Sumit","age": 38,"skills": ["programming" ,"educator"]}';

console.log(person);
console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));