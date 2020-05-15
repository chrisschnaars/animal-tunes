import React from 'react';
import AnimalCardContainer from './components/AnimalCards/AnimalCardContainer';
import ControlBar from './components/ControlBar/ControlBar';
import init from './scripts/init.js';

function App() {
    React.useEffect(() => init(), []);

    return (
        <div className="site container">
            <AnimalCardContainer />
            <ControlBar />
        </div>
    );
}

export default App;
