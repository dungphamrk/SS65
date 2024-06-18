const initialState = {
    theme: 'white'
  };
  
  const themeReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          theme: state.theme === 'white' ? 'black' : 'white'
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;
  