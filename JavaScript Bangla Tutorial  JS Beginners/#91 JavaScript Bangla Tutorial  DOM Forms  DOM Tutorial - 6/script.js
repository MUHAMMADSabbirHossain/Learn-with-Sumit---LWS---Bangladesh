function validateForm() {
    const form = document.forms["myForm"];
    // console.log(form);
    // console.dir(form);
    // console.log(form["fname"].value);
    // console.dir(form["fname"]);
    const value = form["fname"].value;
    if (value === "") {
        alert("You must type name");
        return false;
    }

}