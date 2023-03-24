import "./styles.css";

import type { ReactNode } from "react";
import React, { useEffect, useState } from "react";

import { ButtonTypes } from "./generic-button.types";

interface Props {
  children?: ReactNode;
  style: ButtonTypes;
  onCLick?: () => void;
  text?: string;
}

export const GenericButton = (props: Props): JSX.Element => {
  interface ButtonStyle {
    textColor: string;
    hoverColor: string;
    background: string;
    border: string;
    font: string;
  }

  const [buttonStyle, setButtonStyle] = useState({} as ButtonStyle);

  useEffect(() => {
    const styleDetails: ButtonStyle = {} as ButtonStyle;

    console.log("props = ",props);

    switch (props.style) {
      case ButtonTypes.ActiveCta: {
        styleDetails.background = "#e69122";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "black";
        styleDetails.border = "#30220f";
        break;
      }
      case ButtonTypes.InactiveCta: {
        styleDetails.background = "#e3ddd5";
        styleDetails.textColor = "#ebcea9";
        styleDetails.hoverColor = "#ebcea9";
        styleDetails.border = "#24190a";
        break;
      }
      case ButtonTypes.Back: {
        styleDetails.background = "#f5f3f05";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "#30220f";
        styleDetails.border = "#24190a";
        break;
      }
      case ButtonTypes.Okay: {
        styleDetails.background = "#f5f3f05";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "#f76402";
        styleDetails.border = "#24190a";
        break;
      }
      case ButtonTypes.Cancel: {
        styleDetails.background = "#f5f3f05";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "#30220f";
        styleDetails.border = "#24190a";
        break;
      }
      default:
        styleDetails.background = "#f5f3f05";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "#30220f";
        styleDetails.border = "#24190a";
    }

    setButtonStyle(styleDetails);
  }, []);

  return (
    <button
      className={"button"}
      style={{
        background: buttonStyle.background,
        color: buttonStyle.textColor,
        //hoverColor:buttonStyle.hoverColor,
        //border:1px solid buttonStyle.border,
        font: buttonStyle.font,
      }}
    >
      {props.text}
      {props.children}
    </button>
  );
};
