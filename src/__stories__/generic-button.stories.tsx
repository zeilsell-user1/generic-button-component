import { GenericButton } from "../generic-button/generic-button";
import { ButtonStyles } from "../generic-button/generic-button.types";

export const containerActiveCta = (): JSX.Element => (
  <GenericButton style={ButtonStyles.INACTIVECTA}>text</GenericButton>
);

export const containerInactiveCta = (): JSX.Element => (
  <GenericButton style={ButtonStyles.ACTIVECTA}>text</GenericButton>
);

export const containerBack = (): JSX.Element => (
  <GenericButton style={ButtonStyles.BACK}>Back</GenericButton>
);

export const containerOkay = (): JSX.Element => (
  <GenericButton style={ButtonStyles.OKAY}>OK</GenericButton>
);

export const containerCancel = (): JSX.Element => (
  <GenericButton style={ButtonStyles.CANCEL}>Cancel</GenericButton>
);
