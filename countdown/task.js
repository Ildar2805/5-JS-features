const counter = document.getElementById('timer');
let timer = setInterval(() => {
    counter.textContent = Number(counter.textContent) - 1;
    if (counter.textContent < 0) {
        clearInterval(timer);
        alert('Вы победили в конкурсе!');
        counter.textContent = 0;
    }
}, 1000);


