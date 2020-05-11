import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Slider from './Slider';
import BulbList from './BlubList';
import PlayStopButton from './PlayStopButton';
import { useInterval } from './hooks';
import { computeBpmValue } from './helpers';
import TimeSignature from './TimeSignature';

const StyledBody = styled.body`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  const [bpm, setBpm] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [numberOfBeats, setNumberOfBeats] = useState(4);
  const [beatValue, setBeatValue] = useState(4);
  const [currentBeat, setCurrentBeat] = useState(0);

  const memorizedBpm = React.useMemo(() => computeBpmValue(bpm), [bpm]);

  useEffect(() => {
    if (!isPlaying) {
      setCurrentBeat(0);
    }
  }, [isPlaying]);

  useInterval(
    () => {
      setCurrentBeat(currentBeat === numberOfBeats - 1 ? 0 : currentBeat + 1);
    },
    isPlaying ? memorizedBpm : null,
  );

  const handleBpmChange = (event) => {
    setBpm(event.target.value);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <StyledBody>
      <BulbList nbrOfBeats={numberOfBeats} isPlaying={isPlaying} beat={currentBeat} />
      <Slider bpm={bpm} onBpmChange={handleBpmChange} />
      <PlayStopButton isActive={isPlaying} onClick={togglePlay} />
      <TimeSignature
        numberOfBeats={numberOfBeats}
        beatValue={beatValue}
        onNumberOfBeatsChange={(e) => setNumberOfBeats(e.target.value)}
        onBeatValueChange={(e) => setBeatValue(e.target.value)}
      />
    </StyledBody>
  );
}

export default App;
