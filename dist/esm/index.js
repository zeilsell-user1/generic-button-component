"use client";

import { jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".button {\n  cursor: pointer;\n  border-radius: 5%;\n  background: white;\n  color: black;\n  border: 1px solid black;\n  margin: 1%;\n}\n";
styleInject(css_248z,{"insertAt":"top"});

//'enum like' object declaration (notice the `as const` at the end)
// used becasue exporting const enum will not work when imported
// into another module.
const ButtonStyles = {
    ACTIVECTA: "ACTIVECTA",
    INACTIVECTA: "INACTIVECTA",
    BACK: "BACK",
    OKAY: "OKAY",
    CANCEL: "CANCEL",
};

const GenericButton = (props) => {
    const [buttonStyle, setButtonStyle] = useState({});
    useEffect(() => {
        const styleDetails = {};
        switch (props.style) {
            case ButtonStyles.ACTIVECTA: {
                styleDetails.background = "#e69122";
                styleDetails.textColor = "#30220f";
                styleDetails.hoverColor = "black";
                styleDetails.border = "#30220f";
                break;
            }
            case ButtonStyles.INACTIVECTA: {
                styleDetails.background = "#e3ddd5";
                styleDetails.textColor = "#ebcea9";
                styleDetails.hoverColor = "#ebcea9";
                styleDetails.border = "#24190a";
                break;
            }
            case ButtonStyles.BACK: {
                styleDetails.background = "#f5f3f05";
                styleDetails.textColor = "#30220f";
                styleDetails.hoverColor = "#30220f";
                styleDetails.border = "#24190a";
                break;
            }
            case ButtonStyles.OKAY: {
                styleDetails.background = "#f5f3f05";
                styleDetails.textColor = "#30220f";
                styleDetails.hoverColor = "#f76402";
                styleDetails.border = "#24190a";
                break;
            }
            case ButtonStyles.CANCEL: {
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
    return (jsxs("button", Object.assign({ className: "button", style: {
            background: buttonStyle.background,
            color: buttonStyle.textColor,
            //hoverColor:buttonStyle.hoverColor,
            //border:1px solid buttonStyle.border,
            font: buttonStyle.font,
        } }, { children: [props.text, props.children] })));
};

export { ButtonStyles, GenericButton };
//# sourceMappingURL=index.js.map
