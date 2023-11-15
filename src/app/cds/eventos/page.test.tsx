import { render, screen } from "@testing-library/react";
import UnirsePage from "./page";

describe("Page: /unirse", () => {
  it("should have a title: ¿Como ser parte?", () => {
    render(<UnirsePage />);

    const myElement = screen.getByText("¿Como ser parte?");
    expect(myElement).toBeInTheDocument();
  });

  it("should have a display subitle: Niveles", () => {
    render(<UnirsePage />);
    expect(screen.getByRole("heading")).toHaveTextContent("Niveles");
  });

  it("should have a display subtitle: Reglas", () => {
    render(<UnirsePage />);
    expect(screen.getByRole("heading")).toHaveTextContent("Reglas");
  });
});
