const btnEle = document.querySelectorAll('.btn');

btnEle.forEach(btn => {
    btn.addEventListener('click', e => {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.top = `${y}px`;
        ripple.style.left = `${x}px`;
        btn.appendChild(ripple);
        setTimeout(() => {
            ripple.remove()
        }, 500)
    })
})