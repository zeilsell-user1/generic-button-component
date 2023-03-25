import "./styles.css";
import type { ReactNode } from "react";
import type { ButtonStylesType } from "./generic-button.types";
interface Props {
    children?: ReactNode;
    style: ButtonStylesType;
    onCLick?: () => void;
    text?: string;
}
export declare const GenericButton: (props: Props) => JSX.Element;
export {};
