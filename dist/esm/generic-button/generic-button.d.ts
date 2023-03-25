import "./styles.css";
import type { ReactNode } from "react";
import { ButtonTypes } from "./generic-button.types";
interface Props {
    children?: ReactNode;
    style: ButtonTypes;
    onCLick?: () => void;
    text?: string;
}
export declare const GenericButton: (props: Props) => JSX.Element;
export {};
