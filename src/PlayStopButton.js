import React from 'react';

const PlayStopButton = ({ isActive, onClick }) => <button onClick={onClick}>{isActive ? 'Stop' : 'Play'}</button>;

export default React.memo(PlayStopButton);
