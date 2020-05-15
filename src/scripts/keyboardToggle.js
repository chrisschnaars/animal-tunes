export default function keyboardToggle() {
    const toggleLink = document.querySelector('.js-keyboard-toggle');
    toggleLink.addEventListener('click', focusMethod);
}

const focusMethod = () => {
    console.log('keyboard link');
    document.querySelector('.control-bar__keyboard-input').focus();
};
