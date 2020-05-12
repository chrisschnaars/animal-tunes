import React from 'react';
import AnimalCardContainer from './components/AnimalCards/AnimalCardContainer';
import ControlBar from './components/ControlBar/ControlBar';

function App() {
    return (
        <div className="site container">
            <AnimalCardContainer />
            <ControlBar />
        </div>
    );
}

export default App;
