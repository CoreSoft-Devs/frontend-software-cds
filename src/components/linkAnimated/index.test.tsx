import { render, screen, cleanup } from "@testing-library/react";
import LinkAnimated from ".";

describe("<ButtonAnimated>", () => {
  afterEach(cleanup);

  const componentProps = {
    random: 0,
    page: true,
    href: "/testPage",
    content: "link test",
  };

  it("should a render with text link test", async () => {
    render(<LinkAnimated {...componentProps} />);
    const link = await screen.getByText("link test");
    expect(link).toBeInTheDocument();
  });

  it("should render with url /testPage when pass props with page is to true", async () => {
    render(<LinkAnimated {...componentProps} />);
    const link = await screen.getByRole("link");

    expect(link.getAttribute("href")).toBe("/testPage");
  });
});
