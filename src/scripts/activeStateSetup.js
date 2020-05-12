export default function activeStateSetup() {
    const animalDiv = document.querySelector('.animal-card');
    const activeWidth = animalDiv.offsetHeight;

    document.documentElement.style.setProperty('--active-width', `${activeWidth}px`);
}
