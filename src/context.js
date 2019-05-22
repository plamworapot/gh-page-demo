import React, { useState, createContext } from 'react'

const AppContext = createContext([0, () => {}])

const AppContextProvider = (props) => {
  const [state, setState] = useState(0);
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
}
export {
  AppContext,
  AppContextProvider,
}
