const counter = document.getElementById('timer');
setInterval(() => {
    counter.textContent = Number(counter.textContent) - 1;
    if (counter.textContent === '-1') {
        alert('Вы победили в конкурсе!');
        counter.textContent = '59';
    }
}, 1000)

