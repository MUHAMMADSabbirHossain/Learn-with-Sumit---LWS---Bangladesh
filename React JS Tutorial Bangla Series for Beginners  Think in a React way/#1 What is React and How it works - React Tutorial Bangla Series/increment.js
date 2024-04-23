const domContainer = document.querySelector("#root");

// // const myElement = React.createElement("div", null, "Hello world");
// const myElement = React.createElement("div", null, [
//     React.createElement('p', null, "Hello world"),
//     React.createElement('p', null, "Hello world"),
// ]);

// // ReactDOM.render("Hello world", domContainer);
// ReactDOM.render(myElement, domContainer);

/* let p = document.createElement("p");
p.innerHTML = "Hello world";
domContainer.appendChild(p); */

const Increment = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <h1 id="display">{counter}</h1>
            <div>
                <button id="button" onClick={() => setCounter(counter + 1)}>Increment +</button>
            </div>
        </div>
    );
};

// ReactDOM.render(<Increment />, domContainer);
ReactDOM.render(
    <div className="container">
        <Increment />
        <Increment />
        <Increment />
    </div>,
    domContainer);