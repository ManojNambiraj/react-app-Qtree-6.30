import React, { useContext } from "react";
import Component5 from "./Component5";
import { UserContext } from "./GlobalState";

const Component4 = () => {

    const value = useContext(UserContext)
  return (
    <div>
      Component4 {value.name} {value.dept}
      <h1>
        <Component5 />
      </h1>
    </div>
  );
};

export default Component4;
