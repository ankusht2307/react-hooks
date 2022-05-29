import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  /**
   * This fucntion will run everytime we change
   * the input value and so will create performance
   * issues. To overcome this we will use useMemo
   * hook. THis use Memo hook will run 'slowFunction'
   * only when the input value changes.
   */
  const doubleNumber = useMemo(() => {
    console.log(number);
    return slowFunction(number);
  }, [number]);

  /**
   * One thing to notice here is that if we
   * change the theme then also 'slowFunction'
   * if getting invoked because of the reference
   * equality check. So everytime components
   * rerenders new themeStyles object will be
   * created that will refernce to the new
   * object. We can see this with example below.
   * The useEffect should only run when tthemeStyles
   * changes but that doesn't happens because for
   * every rerender the new object refernce in created
   * for 'themeStyles'. To pre vent this we can also
   * use 'useMemo' here. Few things to keep in mind though
   * we must now use 'useMemo' every where because
   * under the hood useMemo caches data so it will use
   * more memory space that will in turn can create performance
   * issues too.
   */

  const themeStyles = useMemo(
    () => ({
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'dark',
    }),
    [dark]
  );

  // useEffect(() => {
  //   console.log('Theme changed');
  // }, [themeStyles]);

  return (
    <>
      <h1>useMemo</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

const slowFunction = (num) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};
export default App;
