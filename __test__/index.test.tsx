import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a title", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /comunidad de desarrollo de software/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
