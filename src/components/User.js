import React, { useContext } from 'react';
import { ThemeContext } from '../App';

function User() {
  const user = useContext(ThemeContext);

  const themeStyle =
    user.theme === 'dark'
      ? {
          backgroundColor: '#000000',
          color: '#ffffff',
          margin: '4rem',
          padding: '4rem',
          border: '1px solid'
        }
      : {
          backgroundColor: '#ffffff',
          color: '#000000',
          margin: '4rem',
          padding: '4rem',
          border: '1px solid'
        };
  return (
    <>
      <div style={themeStyle}>Hello {user.name}</div>
    </>
  );
}

export default User;
