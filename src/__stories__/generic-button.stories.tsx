import React from "react";

import { GenericButton } from "../generic-button/generic-button";
import { ButtonTypes } from "../generic-button/generic-button.types";

export const containerActiveCta = (): JSX.Element => (
  <GenericButton style={ButtonTypes.InactiveCta}>text</GenericButton>
);

export const containerInactiveCta = (): JSX.Element => (
  <GenericButton style={ButtonTypes.ActiveCta}>text</GenericButton>
);

export const containerBack = (): JSX.Element => (
  <GenericButton style={ButtonTypes.Back}>Back</GenericButton>
);

export const containerOkay = (): JSX.Element => (
  <GenericButton style={ButtonTypes.Okay}>OK</GenericButton>
);

export const containerCancel = (): JSX.Element => (
  <GenericButton style={ButtonTypes.Cancel}>Cancel</GenericButton>
);
