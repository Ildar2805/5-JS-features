let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }

        if (dead.textContent === '10') {
            alert('Вы победили!');
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent === '5') {
            alert('Вы проиграли!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    };
}

