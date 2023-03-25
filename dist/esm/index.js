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

const GenericButton = (props) => {
    const [buttonStyle, setButtonStyle] = useState({});
    useEffect(() => {
        const styleDetails = {};
        switch (props.style) {
            case 0 /* ButtonTypes.ActiveCta */: {
                styleDetails.background = "#e69122";
                styleDetails.textColor = "#30220f";
                styleDetails.hoverColor = "black";
                styleDetails.border = "#30220f";
                break;
            }
            case 1 /* ButtonTypes.InactiveCta */: {
                styleDetails.background = "#e3ddd5";
                styleDetails.textColor = "#ebcea9";
                styleDetails.hoverColor = "#ebcea9";
                styleDetails.border = "#24190a";
                break;
            }
            case 2 /* ButtonTypes.Back */: {
                styleDetails.background = "#f5f3f05";
                styleDetails.textColor = "#30220f";
                styleDetails.hoverColor = "#30220f";
                styleDetails.border = "#24190a";
                break;
            }
            case 3 /* ButtonTypes.Okay */: {
                styleDetails.background = "#f5f3f05";
                styleDetails.textColor = "#30220f";
                styleDetails.hoverColor = "#f76402";
                styleDetails.border = "#24190a";
                break;
            }
            case 4 /* ButtonTypes.Cancel */: {
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

var ButtonTypes;
(function (ButtonTypes) {
    ButtonTypes[ButtonTypes["ActiveCta"] = 0] = "ActiveCta";
    ButtonTypes[ButtonTypes["InactiveCta"] = 1] = "InactiveCta";
    ButtonTypes[ButtonTypes["Back"] = 2] = "Back";
    ButtonTypes[ButtonTypes["Okay"] = 3] = "Okay";
    ButtonTypes[ButtonTypes["Cancel"] = 4] = "Cancel";
})(ButtonTypes || (ButtonTypes = {}));

export { ButtonTypes, GenericButton };
//# sourceMappingURL=index.js.map
