class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    getProperty() {
        return this.age;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafi = new Player("Mashrafi", 35, "Bangladesh");
mashrafi.play();
const sakib = new Player("Sakib", 35, "Bangladesh");
sakib.play();
const players = [];
players.push(mashrafi, sakib);
console.log(players);
// sakib.name = "Mashrafi"; // Should not do it. privite keyword helps to protect the data.
// console.log(sakib.name);
// console.log(sakib.country);
let mutafiz;
mutafiz = new Player("Mutafiz", 35, "Bangladesh");
mutafiz.play();
export { Player };
//# sourceMappingURL=player.js.map