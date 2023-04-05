import React from "react";
import buttonCss from "./Button.module.css";
const WhiteButton = (props) => {
  return <button className={buttonCss.Whitebut}>{props.value}</button>;
};

export default WhiteButton;
