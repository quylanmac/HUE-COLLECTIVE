const initialState = {
    color: 'white',
    theme: 'black',
  }
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE':
          return {
              ...state,
              color: action.color,
          };
      case 'THEME': 
          return {
              ...state,
              theme: action.theme,
          };
      default:
        return state;
    };
  }
  export default rootReducer;