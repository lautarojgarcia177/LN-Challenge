import { render, screen } from "@testing-library/react";
import ArticleGrid from "../article-grid";
import { useArticles } from "@/context/articles-context";
import { mockSubType7Articles } from "../../__mocks__/articles.mock";

jest.mock("@/context/articles-context");

describe("ArticleGrid", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("coincide con la snapshot", () => {
    (useArticles as jest.Mock).mockReturnValueOnce({
      amountToDisplay: 9,
      subtype7Articles: mockSubType7Articles,
    });
    const { container } = render(<ArticleGrid />);
    expect(container).toMatchSnapshot();
  });

  it("renderiza el numero correcto de articulos", () => {
    (useArticles as jest.Mock).mockReturnValueOnce({
      amountToDisplay: 9,
      subtype7Articles: mockSubType7Articles,
    });

    render(<ArticleGrid />);

    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(9);
  });

  it("renderiza un banner cada 3 articulos", () => {
    (useArticles as jest.Mock).mockReturnValueOnce({
      amountToDisplay: 7,
      subtype7Articles: mockSubType7Articles,
    });

    const { container } = render(<ArticleGrid />);

    const banners = container.querySelectorAll(".banner.--small.--mobile");
    expect(banners).toHaveLength(2);
  });
});
