import React from 'react';
import * as images from '../../../assets/images/animals';
import SVG from 'react-inlinesvg';

const AnimalCard = (props) => {
    const { animal, audio, handleClick, handleTransitionEnd, itemIndex, letter, loading } = props;

    // Add loading class and styles
    const loadingClass = loading ? ' animal-card--is-loading' : '';
    const delay = loading ? `${itemIndex * 60 + 100}ms` : 'unset';
    const cardStyle = {
        animationDelay: delay,
    };

    // Image and audio files
    const svgMarkup= images[`${animal}`];

    return (
        <button
            className={`animal-card ${loadingClass}`}
            data-key={letter}
            onClick={handleClick}
            onTouchStart={handleClick}
            onTransitionEnd={handleTransitionEnd}
            style={cardStyle}
        >
            <audio
              data-key={letter}
              preload="auto"
              src={`/audio/${audio}`}
            >
            </audio>
            <SVG src={svgMarkup} width={"100%"} height="100%" />
            <kbd className="animal-card__label">{letter.toUpperCase()}</kbd>
        </button>
    );
}

export default AnimalCard
