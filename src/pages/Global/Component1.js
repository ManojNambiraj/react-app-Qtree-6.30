import React, { useContext } from "react";
import Component2 from "./Component2";
import { UserContext } from "./GlobalState";

function Component1() {
  const value = useContext(UserContext);

  console.log(value);
  

  return (
    <div>
      Component1 {value.name} {value.age}
      <h1>
        <Component2 />
      </h1>
    </div>
  );
}

export default Component1;
