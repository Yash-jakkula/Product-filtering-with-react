import React from "react";
import { createContext } from "react";

const Context = createContext();

const SearchContext = ({ children }) => {
  const [searchItem, setSearchItem] = React.useState("");
  const [catag, setCatag] = React.useState("");
  const [show, setShow] = React.useState(false);
  const value = {
    searchItem,
    setSearchItem,
    catag,
    setCatag,
    show,
    setShow,
  };
  return (
    <>
      <Context.Provider value={value}>{children}</Context.Provider>
    </>
  );
};

export { Context, SearchContext };
