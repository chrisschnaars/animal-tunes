import React, { useState } from 'react';
import './styles.scss';
import animalList from '../../data/animalList.js';
import AnimalCard from '../AnimalCard';
import { playAudio } from '../../scripts';

export default function AnimalCardContainer(props) {
    const { renderGrid } = props;

    // Set animal list
    const [animals, setAnimals] = useState([]);
    React.useEffect(() => {
        let list = [];

        if (renderGrid) {
            // insert each item from list into subarrays accroding to row
            animalList.forEach((row, rowIndex) => {
                let rowList = [];
                row.forEach((item, itemIndex) => {
                    rowList.push(item);
                });

                list.push(rowList);
            });
        } else {
            // insert each item from the list into one subarray
            let rowList = [];
            animalList.forEach((row, rowIndex) => {
                row.forEach((item, itemIndex) => {
                    rowList.push(item);
                });
            });
            list.push(rowList);
        }

        setAnimals(list);
    }, [renderGrid]);

    // Loading Animation
    // const isLoading = useLoadingState();
    const [isLoading, setIsLoading] = useState(true);
    React.useEffect(() => {
        setInterval(() => {
            setIsLoading(false);
        }, 2600);
    }, []);

    // Active Key State
    const [activeAnimal, setActiveAnimal] = useState(undefined);

    // Update active keys on key press
    const triggerSound = (letter) => {
        const selectedKey = letter.toLowerCase();

        // Update active animal state
        animalList.forEach((row, rowIndex) => {
            row.forEach((item, itemIndex) => {
                if (item.letter === selectedKey) {
                    setActiveAnimal(animalList[rowIndex][itemIndex]);
                    playAudio(animalList[rowIndex][itemIndex].animal);
                }
            });
        });
    };

    // End the sound and animation
    const endSound = (e) => {
        setActiveAnimal(undefined);
    };

    // Keyup listener
    React.useEffect(
        () =>
            document.addEventListener('keydown', function (e) {
                triggerSound(e.key);
            }),
        []
    );

    // Keydown listener
    React.useEffect(() => document.addEventListener('keyup', endSound), []);

    return (
        <div className="site__section--main container__inner-container animals">
            {animals.map((row, rowIndex) => {
                return (
                    <div className="animals__cards-container" key={rowIndex}>
                        {row.map((item, itemIndex) => {
                            const activeFlag =
                                activeAnimal && activeAnimal.letter === item.letter ? true : false;

                            const uniqueKey = `${item.animal}${rowIndex}${itemIndex}`;

                            return (
                                <AnimalCard
                                    key={uniqueKey}
                                    activeFlag={activeFlag}
                                    image={item.image}
                                    itemIndex={itemIndex}
                                    letter={item.letter}
                                    loading={isLoading}
                                    handleMouseDown={() => triggerSound(item.letter)}
                                    handleMouseUp={() => endSound()}
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
