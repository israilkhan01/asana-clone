import React from "react";
import buttonCss from "./Button.module.css";
const GetStartButton = (props) => {
  return <button onClick={props.onClick} className={buttonCss.but}>{props.value}</button>;
};

export default GetStartButton;
