import { createContext, useReducer, useEffect } from 'react';

// const Dispatch: React.Dispatch<{
//   type: string;
//   payload: string;
// }>

// type IDarkModeContext = { user: any; loading: any; error: any; dispatch: React.Dispatch<{ type: string; payload: string }> };

const initial_user = JSON.stringify({
  user: '',
});

// let temp = localStorage.getItem('user');
// if(temp )
// console.log('temp:', temp, typeof temp);
// let user = JSON.parse(temp);

const INITIAL_STATE = {
  user: localStorage.getItem('user'),
  loading: false,
  error: null,
};
// console.log('INITIAL_STATE:', INITIAL_STATE, typeof INITIAL_STATE);

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state: any, action: { type: string; payload: string }) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  const obj = {
    user: state.user,
    loading: state.loading,
    error: state.error,
    dispatch,
  };

  return (
    <AuthContext.Provider value={obj}>
      {/* <AuthContext.Provider value={{ user: state.user, loading: state.loading, error: state.error, dispatch }}> */}
      {children}
    </AuthContext.Provider>
  );
};
