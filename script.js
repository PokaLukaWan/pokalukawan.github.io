function setTextColor(colour) {
    const elements = document.querySelectorAll(".text");

    elements.forEach(element => {
        element.style.color = colour;
    });
}

function setBackgroundColor(colour) {
    document.body.style.backgroundColor = colour;
}

function lightmode() {
    setTextColor("#000000");
    setBackgroundColor("#FFFFFF");
}

function darkmode() {
    setTextColor("#FFFFFF");
    setBackgroundColor("#000000");
}