import React, {useState} from 'react';
import './App.css';
import Slider from "./Slider";

function App() {
  const [bpm, setBpm] = useState(60);

  const handleBpmChange = (event) => {
    setBpm(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Slider bpm={bpm} onBpmChange={handleBpmChange}/>
      </header>
    </div>
  );
}

export default App;
