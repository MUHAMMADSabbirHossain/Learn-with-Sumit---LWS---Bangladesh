class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
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
export { Player };
//# sourceMappingURL=player.js.map