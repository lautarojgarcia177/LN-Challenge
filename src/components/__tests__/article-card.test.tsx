import { render, screen } from "@testing-library/react";
import ArticleCard from "../article-card";

describe("ArticleCard", () => {
  const defaultProps = {
    imageUrl: "https://example.com/image.jpg",
    title: "Titulo de ejemplo",
    date: "6 de diciembre de 2019",
    subtitle: "Subtitulo de ejemplo",
  };

  it("coincide con la snapshot", () => {
    const { container } = render(<ArticleCard {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renderiza la article card con una imagen de placeholder cuando la imageUrl no es provista", () => {
    const { imageUrl, ...propsWithoutImageUrl } = defaultProps;
    render(<ArticleCard {...propsWithoutImageUrl} />);

    const imageElement = screen.getByAltText("");
    expect(imageElement).toHaveAttribute("src", "/images/placeholder.webp");
  });

  it("renderiza la article card sin ningun subtitulo cuando este no es provisto", () => {
    const { subtitle, ...propsWithoutSubtitle } = defaultProps;
    render(<ArticleCard {...propsWithoutSubtitle} />);

    const titleElement = screen.getByText(/Titulo de ejemplo/i);
    const dateElement = screen.getByText(/6 de diciembre de 2019/i);
    const subtitleElement = screen.queryByText(/Subtitulo de ejemplo/i);

    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(subtitleElement).not.toBeInTheDocument();
  });
});
