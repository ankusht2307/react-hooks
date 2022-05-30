import User from './components/User';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'John Doe', theme: 'dark' });
  const toggleTheme = () => {
    if (user.theme === 'dark') {
      setUser((prevUser) => ({ ...prevUser, theme: 'light' }));
    } else {
      setUser((prevUser) => ({ ...prevUser, theme: 'dark' }));
    }
  };
  return (
    <>
      <h1>useContext</h1>
      <ThemeContext.Provider value={user}>
        <User />
      </ThemeContext.Provider>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}

export default App;
