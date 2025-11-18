function myMove() {
    const animate = document.getElementById("animate");
    let pos = 0;

    const interval = setInterval(frame, 5);

    function frame() {
        // console.log("stop by using clearInter()");

        if (pos < 350) {
            pos++;
            animate.style.top = pos + 'px';
            animate.style.left = pos + 'px';
        } else {
            // stop
            clearInterval(interval);
        }
    }
}

// myMove();