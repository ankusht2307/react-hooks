import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // type 1
  // const [resourceType, setResourceType] = useState('posts');
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json))
  //     .then(() => console.log(items));
  // }, [resourceType]);

  // type 2
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const windowWidthHandler = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', windowWidthHandler);

    return () => {
      window.removeEventListener('resize', windowWidthHandler);
    };
  }, []);

  return (
    // type 1
    // <div className="App">
    //   <h1>UseEffect</h1>
    //   <p>{resourceType}</p>
    //   <button onClick={() => setResourceType('users')}>Users</button>
    //   <button onClick={() => setResourceType('posts')}>Posts</button>
    //   <button onClick={() => setResourceType('comments')}>Comments</button>
    //   {items && items.map((item) => {
    //     return <pre key={item.id} style={{'width': '100%', 'overflow': 'hidden'}}>{JSON.stringify(item)}</pre>;
    //   })}
    // </div>
    <div>{windowWidth}</div>
  );
}

export default App;
