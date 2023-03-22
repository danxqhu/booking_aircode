import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer';

const INITIAL_STATE = {
  darkMode: false,
};

// type IDarkModeContext = {
//   darkMode: boolean;
//   dispatch: React.Dispatch<{ type: string; payload: string }>;
// };

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
  const obj = { darkMode: state.darkMode, dispatch };

  // return <DarkModeContext.Provider value={{ darkMode: state.darkMode }}>{children}</DarkModeContext.Provider>;
  // return <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>{children}</DarkModeContext.Provider>;
  // return <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>{children}</DarkModeContext.Provider>;
  return <DarkModeContext.Provider value={obj}>{children}</DarkModeContext.Provider>;
};
