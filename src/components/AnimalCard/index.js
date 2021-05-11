import React from 'react';
import './styles.scss';
import * as images from '../../assets/images/animals';
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
        <div
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
              src={`${process.env.PUBLIC_URL}/assets/audio/${audio}`}
            >
            </audio>
            <SVG src={svgMarkup} />
            <kbd className="animal-card__label">{letter.toUpperCase()}</kbd>
        </div>
    );
}

export default AnimalCard
