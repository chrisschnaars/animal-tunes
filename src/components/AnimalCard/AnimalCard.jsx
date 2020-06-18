import React from 'react';
import './styles.scss';
import SVG from 'react-inlinesvg';

export default function AnimalCard(props) {
    const { animal, handleClick, handleTransitionEnd, image, itemIndex, letter, loading } = props;

    // Add loading class and styles
    const loadingClass = loading ? ' animal-card--is-loading' : '';
    const delay = loading ? `${itemIndex * 60 + 100}ms` : 'unset';
    const cardStyle = {
        animationDelay: delay,
    };

    // Image and audio files
    const audioFile = require(`../../assets/audio/${animal}.mp3`);
    const imagePath = require(`../../assets/images/animals/${image}`);

    return (
        <div
            className={`animal-card ${loadingClass}`}
            data-key={letter}
            onClick={handleClick}
            onTouchStart={handleClick}
            onTransitionEnd={handleTransitionEnd}
            style={cardStyle}
        >
            <audio data-key={letter} preload="auto" src={audioFile}></audio>

            <SVG className="animal-card__image" src={imagePath}></SVG>
            <kbd className="animal-card__label">{letter.toUpperCase()}</kbd>
        </div>
    );
}
