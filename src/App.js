//import logo from './logo.svg';
import './App.css';
//import Button from './Button';
import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [showCount, setShowCount] = useState(true);

  return (
    <div className="App">
      {
        showCount && <Counter />
      }
      <button onClick={() => setShowCount(!showCount)}>hide counter</button>
    </div>
  );
}

export default App;
