// Tagged tamlate literals

function modifier(strings, ...values) {
    // console.log(strings);
    // console.log(values);
    const m = strings.reduce((prev, current) => {
        return prev + current + (values.length ? "Mr. " + values.shift() : "");
    }, "");
    return m;
}
var player1 = "Sakib";
var player2 = "Tamim";

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);