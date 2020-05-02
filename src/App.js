import React, { useEffect, useState } from 'react';

import './App.css';
import Slider from './Slider';
import BulbList from './BlubList';
import PlayStopButton from './PlayStopButton';
import { useInterval } from './hooks';
import { computeBpmValue } from './helpers';
import TimeSignature from './TimeSignature';

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
    <div className="App">
      <body className="App-body">
        <BulbList nbrOfBeats={numberOfBeats} isPlaying={isPlaying} beat={currentBeat} />
        <Slider bpm={bpm} onBpmChange={handleBpmChange} />
        <PlayStopButton isActive={isPlaying} onClick={togglePlay} />
        <TimeSignature
          numberOfBeats={numberOfBeats}
          beatValue={beatValue}
          onNumberOfBeatsChange={(e) => setNumberOfBeats(e.target.value)}
          onBeatValueChange={(e) => setBeatValue(e.target.value)}
        />
      </body>
    </div>
  );
}

export default App;
