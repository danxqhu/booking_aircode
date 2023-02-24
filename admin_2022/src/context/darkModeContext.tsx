import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer';

const INITIAL_STATE = {
  darkMode: false,
};

type Dark = {
  darkMode: boolean;
  dispatch: any;
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>{children}</DarkModeContext.Provider>;
};
