const accordion = document.querySelectorAll('.js-accordion');

accordion.forEach(item => {
    item.addEventListener('click', () => {
        let pai = item.parentElement;

        pai.classList.toggle('active');
        
    })
})