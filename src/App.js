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

const StyledBpm = styled.div`
  color: #5f85db;
  font-family: Roboto;
  font-weight: 500;
  font-size: 92px;
  line-height: 108px;
`;

const StyledBpmText = styled.span`
  font-size: 28px;
  color: #a8b1fb;
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
      <StyledMain>
        <StyledBpm>
          {bpm} <StyledBpmText>BPM</StyledBpmText>
        </StyledBpm>
        <BulbList nbrOfBeats={numberOfBeats} isPlaying={isPlaying} beat={currentBeat} />
        <Slider bpm={bpm} onBpmChange={handleBpmChange} />
        <TimeSignature
          numberOfBeats={numberOfBeats}
          beatValue={beatValue}
          onNumberOfBeatsChange={(e) => setNumberOfBeats(e.target.value)}
          onBeatValueChange={(e) => setBeatValue(e.target.value)}
        />
        <PlayStopButton isActive={isPlaying} onClick={togglePlay} />
      </StyledMain>
    </StyledBody>
  );
}

export default App;
