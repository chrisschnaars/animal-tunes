import React from 'react';

export default function AnimalCard(props) {
    const { activeFlag, image, index } = props;

    const classes = activeFlag ? 'animal-card animal-card--is-active' : 'animal-card';

    const bgImage = require(`../../assets/images/animals/${image}`);
    const cardStyle = {
        animationDelay: `${200 + 60 * index}ms`,
        backgroundImage: `url(${bgImage})`,
    };

    return <div className={classes} style={cardStyle}></div>;
}
