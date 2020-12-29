window.addEventListener('scroll', () => {
    let x = document.querySelector('header');
    x.classList.toggle('sticky', window.scrollY > 0);
})

const toggleMenu = () => {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');

    menuToggle.classList.toggle('active');
    menu.classList.toggle('on');
}