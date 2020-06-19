// store.js
import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();
const initialState = {color: "white"};

const reducer = (state, action) => {
  switch(action.type) {
    case "default":
        return {
            color: "white",
        }
    case "increment":
      return {
        color: state.color,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);