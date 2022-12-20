import React from "react";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer, circledolla } from "@fortawesome/free-solid-svg-icons";


export const Testing = () => {
  return (
    <div>
        aaac
      <i class={faMugSaucer}></i>
      {/* <FontAwesomeIcon icon={faMugSaucer} style="--fa-primary-color: green" /> */}
      bbb
      <FontAwesomeIcon icon={faMugSaucer} color="#181D31" />
      {/* <FontAwesomeIcon icon={faMugSaucer} style="--fa-inverse: #ffffff;" />
       */}
    </div>
  );
};
