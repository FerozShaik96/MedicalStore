import React, { useReducer } from "react";
import MedContext from "./MedContext";
const MedContextProvider = (props) => {
  const defaultMeds = {
    items: [],
  };
  const medReducer = (state, action) => {
    if (action.type === "ADD") {
      console.log(action.item);
    }
  };
  const [medicen, disPatchState] = useReducer(medReducer, defaultMeds);
  const addMedToHandler = (item) => {
    console.log(item);
    disPatchState({
      type: "ADD",
      item: item,
    });
  };
  const removeToHandler = () => {};
  const medContext = {
    items: medicen.item,
    addItem: addMedToHandler,
    removeItem: removeToHandler,
  };
  return (
    <MedContext.Provider value={medContext}>
      {props.children}
    </MedContext.Provider>
  );
};
export default MedContextProvider;
