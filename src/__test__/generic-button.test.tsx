import { ButtonStyles, GenericButton } from "../generic-button";

describe("genericbutton component", () => {
  it("should render an active CTA button", () => {
    const containerActiveCta = (): JSX.Element => (
      <GenericButton style={ButtonStyles.INACTIVECTA}>text</GenericButton>
    );
    expect(containerActiveCta).toMatchSnapshot();
  });

  it("should render an inactive CTA button", () => {
    const containerInactiveCta = (): JSX.Element => (
      <GenericButton style={ButtonStyles.ACTIVECTA}>text</GenericButton>
    );
    expect(containerInactiveCta).toMatchSnapshot();
  });

  it("should render a back button", () => {
    const containerBack = (): JSX.Element => (
      <GenericButton style={ButtonStyles.BACK}>Back</GenericButton>
    );
    expect(containerBack).toMatchSnapshot();
  });

  it("should render an OK button", () => {
    const containerOkay = (): JSX.Element => (
      <GenericButton style={ButtonStyles.OKAY}>OK</GenericButton>
    );
    expect(containerOkay).toMatchSnapshot();
  });

  it("should render a cancel button", () => {
    const containerCancel = (): JSX.Element => (
      <GenericButton style={ButtonStyles.CANCEL}>Cancel</GenericButton>
    );
    expect(containerCancel).toMatchSnapshot();
  });
});
