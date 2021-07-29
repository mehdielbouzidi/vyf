import React, { useReducer, createContext } from "react";

const myContext = createContext();

export default myContext;

export const initialState = {
  openMenu: false,
  auth: false,
  path: "",
  filter: {
    expression: "",
    contains: "",
  },
  selectedRow: {},
  rows: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return {
        ...state,
        openMenu: action.payload,
      };
    case "SET_AUTH":
      return {
        ...state,
        auth: action.payload,
      };
    case "SET_PATH":
      return {
        ...state,
        path: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SELECTED_ROW":
      return {
        ...state,
        selectedRow: action.payload,
      };
    case "SET_ROWS":
      return {
        ...state,
        rows: action.payload,
      };
    default:
      throw new Error();
  }
};

//actions
export const OpenMenu = (value) => ({
  type: "OPEN_MENU",
  payload: value,
});

export const setAuth = (value) => ({
  type: "SET_AUTH",
  payload: value,
});

export const setPath = (value) => ({
  type: "SET_PATH",
  payload: value,
});

export const setFilter = (value) => ({
  type: "SET_FILTER",
  payload: value,
});

export const setSelectedRow = (value) => ({
  type: "SELECTED_ROW",
  payload: value,
});

export const setRows = (value) => ({
  type: "SET_ROWS",
  payload: value,
});

export const MyContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <myContext.Provider value={[state, dispatch]}>{props.children}</myContext.Provider>;
};
