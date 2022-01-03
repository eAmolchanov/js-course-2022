const pageEl = document.querySelector('html');
const toggleButtonEl = document.querySelector('[data-toggle]');
const halfmoonEl = document.querySelector('[data-halfmoon]');
const sunEl = document.querySelector('[data-sun]');
const imagesInEl = document.querySelectorAll('[data-image-in]');
const buttonBackToTopEl = document.querySelector('[data-back-to-top]');
toggleButtonEl.addEventListener('click', () => {
    pageEl.classList.toggle('html--dark');
    halfmoonEl.classList.toggle('themes-toggle__button--hidden');
    sunEl.classList.toggle('themes-toggle__button--active');
});
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
};
function imageIntersect([entry]) {
    if (entry.isIntersecting) {
        entry.target.classList.add('image-animation');
        setTimeout(() => {
            entry.target.classList.remove('image');
        }, 3000);
    }
}
const observer = new IntersectionObserver(imageIntersect, options);
for (let count = 0; count < imagesInEl.length; count++) {
    observer.observe(imagesInEl[count]);
}
window.addEventListener('scroll', () => {
    if (window.scrollY < document.documentElement.clientHeight) {
        buttonBackToTopEl.classList.add('button__back-to-top--hidden');
    } else {
        buttonBackToTopEl.classList.remove('button__back-to-top--hidden');
    }
});
buttonBackToTopEl.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
