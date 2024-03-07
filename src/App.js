import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    date: ""
  });
  console.dir(state);

  function onChange(e) {
    console.dir(e);
    setState({
      date: e.target.value
    });
  }

  return (
    <div className="App">
      <div>State: {state.date}</div>
      <label htmlFor='datetest'>Test:</label>
      <input id='datetest' type="date" value={state.date} onChange={onChange}></input>
    </div>
  );
}

export default App;
