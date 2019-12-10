const btns = document.querySelectorAll('.btn');
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');
const screen = document.querySelector('.screen');

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

equal.addEventListener('click', e => {
    if(screen.value === ''){
        screen.value = 'Enter a value';
        setTimeout(()=>{
            screen.value = '';
        }, 1000)
    }else{
        screen.value = eval(screen.value);
    }
});

clear.addEventListener('click', e => {
    screen.value = '';
})