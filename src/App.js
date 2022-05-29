import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(0);
  // Case 1: Display how many times the component is rendered
  // ! This will cause infinite renders because we
  // ! are changing state and then upon that state chnage
  // ! component is again rendering.
  useEffect(() => {
    // setRenderCount((prevCount) => prevCount + 1);
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      {/* usecase: Persisting values accross the renders 
      without affecting the state change. */}
      <h1>useRef</h1>
      <p>I rendered {renderCount.current} times</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default App;
