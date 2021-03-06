import React, { useState, useEffect } from 'react';
import AnimalCardContainer from '../AnimalCardContainer';
import ControlBar from '../ControlBar';

export default function App() {
    // Console message
    React.useEffect(() => init(), []);

    // Hook to get window width
    // Used for conditional rendering of animal grid
    const width = useWindowWidth();
    const renderGrid = width < 1088 ? false : true;

    return (
        <div className="site container">
            <AnimalCardContainer renderGrid={renderGrid} />
            <ControlBar />
        </div>
    );
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return width;
}

function init() {
    console.log('Check out the code at https://github.com/chrisschnaars/animal-tunes');
}
