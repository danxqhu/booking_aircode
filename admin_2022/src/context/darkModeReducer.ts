interface State {
  darkMode: boolean;
}

interface Action {
  type: string;
}

const DarkModeReducer = (state: State, action: Action) => {
  // console.log('state:', state, 'action:', action);
  switch (action.type) {
    case 'LIGHT': {
      return {
        darkMode: false,
      };
    }
    case 'DARK': {
      return {
        darkMode: true,
      };
    }
    case 'TOGGLE': {
      return {
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
