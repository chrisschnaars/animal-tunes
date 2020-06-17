import React from 'react';
import './styles.scss';
import SVG from 'react-inlinesvg';

export default function AnimalCard(props) {
    const {
        activeFlag,
        animal,
        handleMouseDown,
        handleMouseUp,
        image,
        itemIndex,
        letter,
        loading,
    } = props;

    // Dynamically set card classes
    const loadingClass = loading ? ' animal-card--is-loading' : '';
    const classes = activeFlag ? 'animal-card animal-card--is-active' : 'animal-card';

    // Set loading animation delay
    const delay = loading ? `${itemIndex * 40}ms` : 'unset';
    const cardStyle = {
        animationDelay: delay,
    };

    // Image and audio files
    const audioFile = require(`../../assets/audio/${animal}.mp3`);
    const imagePath = require(`../../assets/images/animals/${image}`);

    return (
        <div
          className={`${classes} ${loadingClass}`}
          style={cardStyle}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <audio className={animal} preload="auto">
            <source src={audioFile} type="audio/mp3" />
          </audio>

          <SVG className="animal-card__image" src={imagePath}></SVG>
          <h2 className="animal-card__label">{letter.toUpperCase()}</h2>
        </div>
    );
}
