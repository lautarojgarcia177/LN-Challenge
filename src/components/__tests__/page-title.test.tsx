import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PageTitle from "@/components/page-title";

describe("PageTitle", () => {
  test("renderiza con el titulo provisto", () => {
    render(<PageTitle title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  test("aplica un className por defecto cuando ninguno es provisto", () => {
    const { container } = render(<PageTitle title="Test Title" />);
    expect(container.firstChild).toHaveClass(
      "com-titleWithfollow hlp-marginBottom-15"
    );
  });

  test("aplica un className custom cuando es provisto", () => {
    const { container } = render(
      <PageTitle title="Test Title" className="custom-class" />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  test("renderiza el titulo con el classname correcto", () => {
    render(<PageTitle title="Test Title" />);
    expect(screen.getByText("Test Title")).toHaveClass(
      "com-title-section-xl hlp-marginBottom-40"
    );
  });
});
