import { ButtonTypes, GenericButton } from "../generic-button";

describe("genericbutton component", () => {
  it("should render an active CTA button", () => {
    const containerActiveCta = (): JSX.Element => (
      <GenericButton style={ButtonTypes.InactiveCta}>text</GenericButton>
    );
    expect(containerActiveCta).toMatchSnapshot();
  });

  it("should render an inactive CTA button", () => {
    const containerInactiveCta = (): JSX.Element => (
      <GenericButton style={ButtonTypes.InactiveCta}>text</GenericButton>
    );
    expect(containerInactiveCta).toMatchSnapshot();
  });

  it("should render a back button", () => {
    const containerBack = (): JSX.Element => (
      <GenericButton style={ButtonTypes.InactiveCta}>Back</GenericButton>
    );
    expect(containerBack).toMatchSnapshot();
  });

  it("should render an OK button", () => {
    const containerOkay = (): JSX.Element => (
      <GenericButton style={ButtonTypes.InactiveCta}>OK</GenericButton>
    );
    expect(containerOkay).toMatchSnapshot();
  });

  it("should render a cancel button", () => {
    const containerCancel = (): JSX.Element => (
      <GenericButton style={ButtonTypes.InactiveCta}>Cancel</GenericButton>
    );
    expect(containerCancel).toMatchSnapshot();
  });
});
