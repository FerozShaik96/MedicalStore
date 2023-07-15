import React from "react";
const MedContext = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});
export default MedContext;
