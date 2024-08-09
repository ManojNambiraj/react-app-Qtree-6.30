import React from "react";

function SampleButton(props) {
  return (
    <div>
      <button className="demoBtn" style={{ backgroundColor: props.color }}>
        {props.userName}
      </button>
    </div>
  );
}

export default SampleButton;
