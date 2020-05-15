export default function loadAnimation() {
    const cards = document.querySelectorAll('.animal-card');
    // const loadClass = 'animal-card--is-loading';

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('animationend', () => {
            console.log('animation ended!');
            cards[i].style.animation = 'none';
        });
    }
}
