import React, { useState, useEffect } from 'react';
import animalData from '../../data/animalList.js';
import AnimalCard from '../AnimalCard';

const AnimalCardContainer = (props) => {
    const { renderGrid } = props;

    // Set animal list
    const animals = useAnimalList(renderGrid);

    // Loading Animation
    // const isLoading = useLoadingState();
    const [isLoading, setIsLoading] = useState(true);
    React.useEffect(() => {
        setInterval(() => {
            setIsLoading(false);
        }, 2600);
    }, []);


    // Keyup listener
    React.useEffect(
        () =>
            document.addEventListener('keydown', function (e) {
                triggerSound(e.key);
            }),
        []
    );

    return (
        <div className="inner-wrapper grow shrink flex flex-col items-center justify-start lg:justify-center">
            {animals.map((row, rowIndex) => {
                return (
                    <div className="flex items-stretch content-center justify-center flex-wrap gap-1 lg:gap-0 lg:flex-nowrap" key={rowIndex}>
                        {row.map((item, itemIndex) => {
                            return (
                                <AnimalCard
                                    audio={item.sound}
                                    key={item.letter}
                                    image={item.image}
                                    itemIndex={itemIndex}
                                    letter={item.letter}
                                    loading={isLoading}
                                    handleClick={() => triggerSound(item.letter)}
                                    handleTransitionEnd={(e) => endSound(e, item.letter)}
                                    animal={item.animal}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

function useAnimalList(renderGrid) {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        let list = [];

        /*
            Construction of array of animals is based on
            browser width. This is potentially a hack.
        */
        if (renderGrid) {
            animalData.forEach((row, rowIndex) => {
                let rowList = [];
                row.forEach((item, itemIndex) => {
                    rowList.push(item);
                });

                list.push(rowList);
            });
        } else {
            let rowList = [];
            animalData.forEach((row, rowIndex) => {
                row.forEach((item, itemIndex) => {
                    rowList.push(item);
                });
            });
            list.push(rowList);
        }

        setAnimals(list);
    }, [renderGrid]);

    return animals;
}

function triggerSound(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) return;

    // Play audio file
    audio.currentTime = 0;
    audio.play();

    // Add active class
    const activeKey = document.querySelector(`.animal-card[data-key="${key}"]`);
    activeKey.classList.add('animal-card--is-active');
}

function endSound(e, key) {
    if (e.propertyName !== 'transform') return;
    const activeKey = document.querySelector(`.animal-card[data-key="${key}"]`);
    activeKey.classList.remove('animal-card--is-active');
}

export default AnimalCardContainer
