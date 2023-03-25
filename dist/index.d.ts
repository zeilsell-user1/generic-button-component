import { ReactNode } from 'react';

declare const ButtonStyles: {
    readonly ACTIVECTA: "ACTIVECTA";
    readonly INACTIVECTA: "INACTIVECTA";
    readonly BACK: "BACK";
    readonly OKAY: "OKAY";
    readonly CANCEL: "CANCEL";
};
type ButtonStylesType = keyof typeof ButtonStyles;

interface Props {
    children?: ReactNode;
    style: ButtonStylesType;
    onCLick?: () => void;
    text?: string;
}
declare const GenericButton: (props: Props) => JSX.Element;

export { ButtonStyles, ButtonStylesType, GenericButton };
