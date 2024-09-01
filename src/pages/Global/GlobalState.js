import React, { createContext, useState } from "react";
import Component1 from "./Component1";

export const UserContext = createContext();

const GlobalState = () => {

    const student = {
        name: "ram",
        age: 23,
        dept: "IR"
    }
  return (
    <UserContext.Provider value={student}>
      <h1>
        <Component1 />
      </h1>
    </UserContext.Provider>
  );
};

export default GlobalState;
