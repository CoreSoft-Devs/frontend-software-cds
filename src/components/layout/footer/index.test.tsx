import { render, screen } from "@testing-library/react";
import Footer from "./";

describe("<Footer>", () => {
  it("should render with text", async () => {
    render(<Footer />);
    const footerText = await screen.getByText(`© ${new Date().getFullYear()}`);

    expect(footerText).toBeInTheDocument();
  });
});
