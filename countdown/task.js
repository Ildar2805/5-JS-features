const counter = document.getElementById('timer');
const date = new Date(null);
date.setSeconds(counter.textContent); 
counter.textContent = date.toISOString().slice(11, 19);
let timer = setInterval(() => {
    distance = counter.textContent - 1000;
    alert(+counter.textContent)
    date.setSeconds(distance);
    counter.textContent = date.toISOString().slice(11, 19);
    if (distance <= 0) {
        clearInterval(timer);
        alert('Вы победили в конкурсе!');
    }
}, 1000)

