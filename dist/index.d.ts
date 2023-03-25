import { ReactNode } from 'react';

declare const enum ButtonTypes {
    ActiveCta = 0,
    InactiveCta = 1,
    Back = 2,
    Okay = 3,
    Cancel = 4
}

interface Props {
    children?: ReactNode;
    style: ButtonTypes;
    onCLick?: () => void;
    text?: string;
}
declare const GenericButton: (props: Props) => JSX.Element;

export { ButtonTypes, GenericButton };
