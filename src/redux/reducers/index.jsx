const initialState = {
    color: 'white'
  }
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE':
          return {
              ...state,
              color: action.color,
          };
      default:
        return state;
    };
  }
  export default rootReducer;