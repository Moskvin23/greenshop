import React from 'react';
import MyContext from './MyContext';

const MyContextProvider = ({ children }) => {
  const [state, setState] = React.useState('');

  const updateState = (newState) => {
    setState(newState);
  };

  return <MyContext.Provider value={{ state, updateState }}>{children}</MyContext.Provider>;
};

export default MyContextProvider;
