function getRandomColor() {
    let color;
    do {
        color = Math.floor(Math.random() * 16777215).toString(16);
    } while (color === "000000" || color === "ffffff"); // Avoid black and white
    return "#" + color;
}

function setRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360); // Random angle for the gradient
    document.body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}


window.onload = setRandomGradient;

const toggleButton = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.left');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

