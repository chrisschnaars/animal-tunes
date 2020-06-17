const playAudio = (animal) => {
    const source = document.querySelector(`.${animal}`);
    source.currentTime = 0;
    source.play();
};

export default playAudio;
