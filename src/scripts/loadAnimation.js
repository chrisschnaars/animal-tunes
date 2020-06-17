const loadAnimation = () => {
    const cards = document.querySelectorAll('.animal-card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('animationend', () => {
            console.log('animation ended!');
            cards[i].style.animation = 'none';
        });
    }
};

export default loadAnimation;
