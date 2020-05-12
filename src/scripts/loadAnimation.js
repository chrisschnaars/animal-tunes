export default function loadAnimation() {
    const cards = document.querySelectorAll('.animal-card');
    const loadClass = 'animal-card--is-loading';

    for (let i = 0; i < cards.length; i++) {
        const animationDelay = 200 + i * 80;

        (function (i) {
            setTimeout(function () {
                cards[i].classList.add(loadClass);
                setTimeout(function () {
                    cards[i].classList.remove(loadClass);
                }, 1000);
            }, animationDelay);
        })(i);
    }
}
