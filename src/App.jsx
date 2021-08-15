import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import Slider from './components/Slider';
import BulbsList from './components/BulbsList';
import PlayStopButton from './components/PlayStopButton';
import TimeSignature from './components/TimeSignature';
import BpmDisplay from './components/BpmDisplay';
import useInterval from './hooks';
import {computeBpmValue} from './helpers';
import {NOTE_TYPES} from './utils/beat';

const StyledBody = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: auto;
  font-size: calc(10px + 2vmin);
  color: white;
  justify-content: center;
`;

const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 150px 0;
`;

function App() {
  const [bpm, setBpm] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [numberOfBeats, setNumberOfBeats] = useState(4);
  const [beatType, setBeatType] = useState(NOTE_TYPES.QUATER_NOTE);
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
    isPlaying ? memorizedBpm : null
  );

  const handleBpmChange = event => {
    setBpm(event.target.value);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <StyledBody>
      <StyledMain>
        <BpmDisplay bpm={bpm} />
        <BulbsList numberOfBeats={numberOfBeats} isPlaying={isPlaying} currentBeat={currentBeat} />
        <Slider bpm={bpm} onBpmChange={handleBpmChange} />
        <TimeSignature
          numberOfBeats={numberOfBeats}
          beatType={beatType}
          onNumberOfBeatsChange={e => setNumberOfBeats(Number(e.target.value))}
          onBeatValueChange={e => setBeatType(Number(e.target.value))}
        />
        <PlayStopButton isActive={isPlaying} onClick={togglePlay} />
      </StyledMain>
    </StyledBody>
  );
}

export default App;
