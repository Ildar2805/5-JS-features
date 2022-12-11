const img = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
let counter = 0;
img.onclick = () => {
    counter += 1;
    if (counter % 2 === 1) {
        img.width += 20;
    } else {
        img.width -= 20;
    }
    clicker.textContent = counter;
}