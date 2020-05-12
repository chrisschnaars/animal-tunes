import React, { useState } from 'react';
import { animalList } from './animalList.js';
import AnimalCard from './AnimalCard';
import { audio } from '../../scripts/audio';
import activeStateSetup from '../../scripts/activeStateSetup';

export default function AnimalCardContainer() {
    // Add global keyup listener
    React.useEffect(() => activeStateSetup(), []);
    React.useEffect(() => window.addEventListener('resize', activeStateSetup), []);

    // Active Key State
    const [activeAnimal, setActiveAnimal] = useState(undefined);

    // Update active keys on key press
    const handleKeyDown = (e) => {
        // setActiveAnimal(undefined);
        // audio.stopTone();

        const selectedKey = e.key.toLowerCase();

        // Exit if not usable key
        if (e.metaKey || e.ctrlKey) {
            return;
        }

        // Update active animal state
        for (let i = 0; i < animalList.length; i++) {
            if (animalList[i].letter === selectedKey) {
                setActiveAnimal(animalList[i]);
                audio.playTone(animalList[i].sound);
            }
        }
    };

    const handleKeyUp = (e) => {
        if (e.key.length <= 1) {
            setActiveAnimal(undefined);
        }
    };

    // Add global keyup listener
    React.useEffect(() => document.addEventListener('keydown', handleKeyDown), []);

    // Add global keydown listener
    React.useEffect(() => document.addEventListener('keyup', handleKeyUp), []);

    return (
        <div className="site__section--main container__inner-container animals">
            <div className="animals__cards-container">
                {animalList.map((item, index) => {
                    const activeFlag =
                        activeAnimal && activeAnimal.letter === item.letter ? true : false;

                    return (
                        <AnimalCard
                            key={index}
                            activeFlag={activeFlag}
                            image={item.image}
                            index={index}
                            animal={item.animal}
                        />
                    );
                })}
            </div>
        </div>
    );
}
