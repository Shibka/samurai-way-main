import React, { useState } from "react";

type PropsType = {
  on: boolean;
  onClick: (on: boolean) => void;
};

export const  UncontrolledOnOffMemo = React.memo(UncontrolledOnOff)
export function UncontrolledOnOff(props: PropsType) {
  let [on, setOn] = useState(true);

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "1px",
    backgroundColor: on ? "green" : "white",
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "2px",
    backgroundColor: on ? "white" : "red",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red",
  };

  const onClicked = () => {
    setOn(true);
    props.onClick(true);
  };
  const offClicked = () => {
    setOn(false);
    props.onClick(false);
  };
  return (
    <div>
      <div style={onStyle} onClick={onClicked}>
        On
      </div>
      <div style={offStyle} onClick={offClicked}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
}
