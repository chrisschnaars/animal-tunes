import React from 'react';
import keyboardToggle from '../../scripts/keyboardToggle';

export default function ControlBar() {
    React.useEffect(() => keyboardToggle(), []);

    return (
        <div className="site__section container__inner-container control-bar">
            <p>Press keys A-Z to play sounds.</p>
            <p className="js-keyboard-toggle">Click here for mobile phone keyboard.</p>
            <div className="control-bar__keyboard-input-container">
                <input type="text" className="control-bar__keyboard-input" />
            </div>
        </div>
    );
}
