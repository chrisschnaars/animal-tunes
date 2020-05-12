export const audio = {
    source: null,
    playTone(src) {
        if (this.source) {
            // this.source.pause();
        }
        this.source = new Audio(require(`../assets/audio/${src}`));
        this.source.play();
    },
};
