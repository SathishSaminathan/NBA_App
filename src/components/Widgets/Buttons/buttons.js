import React from "react";
import { Link } from "react-router-dom";

import styles from "./buttons.css";

const Buttons = props => {
  let template = null;

  switch (props.type) {
    case "loadmore": {
      template = (<div className={styles.blue_btn}>{props.name}</div>);
      break;
    }
    default:
      template = null;
  }

  return <div>{template}</div>;
};

export default Buttons;
