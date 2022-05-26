import { useState } from 'react';
import './App.css';

function computeCount() {
  console.log('====Rendered from function');
  return 0;
}

function App() {
  // const [count, setCount] = useState(0); // For type 1,2
  // const [isVisible, setIsVisible] = useState(true); // For Type 3
  // const [user, setUser] = useState({ name: 'Thor', home: 'Asgard' }); // For Type 4

  // Type 1
  // /**
  //  * This is not the right way to set State
  //  * because it is asynchronous and when we
  //  * try to 'steCount' multiple times it will
  //  * still increment or decrement by 1 because
  //  * by the time it tries to set the next count
  //  * it still sees the state as 0 which is set by
  //  * default.
  //  */
  // const incrementCount = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };

  // const decrementCount = () => {
  //   setCount(count - 1);
  //   setCount(count - 1);
  //   setCount(count - 1);
  // };

  // Type 2
  // /**
  //  * This is the right way to setState
  //  * it take previous count value as an
  //  * argument and then increment or
  //  * decrement from that count value
  //  */
  // const incrementCount = () => {
  //   setCount((count) => count + 1);
  //   setCount((count) => count + 1);
  //   setCount((count) => count + 1);
  // };

  // const decrementCount = () => {
  //   setCount((count) => count - 1);
  //   setCount((count) => count - 1);
  //   setCount((count) => count - 1);
  // };

  // Type 3  - boolean value
  // /**
  //  * This is the roght way to setState
  //  * it take previous count value as an
  //  * argument and then increment or
  //  * decrement from that count value
  //  */
  // const toggleVisibility = () => {
  //   setIsVisible((previousVisibleState) => !previousVisibleState);
  // };

  // Type 4 - Object
  // /**
  //  * when we are dealing with the object we
  //  * can't just directly change the object
  //  * values, we need to first copy the previous
  //  * object and then update the properties we want
  //  */
  // const updateUser = (user) => {
  //   setUser((previousState) => {
  //     // return the object with previous state with
  //     // the updated properties
  //     return {
  //       ...previousState,
  //       name: 'Loki',
  //       home: 'Aagard and i am the true king',
  //     };
  //   });
  // };

  // Type 5  - Bonus - function
  /**
   * Let's take an example if we want to do
   * some computation, which is being done by some
   * external function then how dowe pass the function
   */


  /*
   *This will work fine and component will get 
   *rendered only one time.
   */
  // const [count, setCount] = useState(() => {
  //   console.log('====component rendered only one time');
  //   return 0;
  // });

  // /**
  //  * This will cause compoenent render everytime the 
  //  * count changes
  //  */
  // const [count, setCount] = useState(computeCount());

  /**
   * Here how we can fix the rendering issue 
   * from external function
   */
   const [count, setCount] = useState(() => computeCount());

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const decrementCount = () => {
    setCount((count) => count - 1);
  };
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}
    >
      {/* for type 1, 2, 5 */}
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>

      {/* for type 3 */}
      {/* {isVisible && <span>Hi There!!!!!!</span>}
      <button onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}</button> */}

      {/* for type 4 */}
      {/* <p>
        My name is {user.name}, i live in {user.home}
      </p>
      <button onClick={updateUser}>Update User</button> */}
    </div>
  );
}

export default App;
