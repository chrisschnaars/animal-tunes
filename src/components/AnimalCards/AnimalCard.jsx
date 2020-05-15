import React from 'react';

export default function AnimalCard(props) {
    const { activeFlag, animal, image, index, loading } = props;

    const loadingClass = loading ? ' animal-card--is-loading' : '';
    const classes = activeFlag ? 'animal-card animal-card--is-active' : 'animal-card';

    const bgImage = require(`../../assets/images/animals/${image}`);
    const delay = loading ? `${200 + 60 * index}ms` : 'unset';
    const cardStyle = {
        animationDelay: delay,
        backgroundImage: `url(${bgImage})`,
    };

    const audioFile = require(`../../assets/audio/${animal}.mp3`);

    return (
        <div className={`${classes} ${loadingClass}`} style={cardStyle}>
            <audio className={animal} preload="auto">
                <source src={audioFile} type="audio/mp3" />
            </audio>
        </div>
    );
}
