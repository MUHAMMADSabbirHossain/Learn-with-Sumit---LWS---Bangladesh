const app = {};

app.name = "Muhammad Bin Ahmad";

app.OutputName = function () {
    console.log(this.name);
    console.log(app.name);


}

app.OutputName();

console.log(app);
