import { render, screen, fireEvent } from "@testing-library/react";
import LoadMoreButton from "../load-more-button";
import { mockArticles, mockSubType7Articles } from "../../__mocks__/articles.mock";
import { useArticles } from "@/context/articles-context";

jest.mock("@/context/articles-context", () => ({
  useArticles: jest.fn(),
}));

describe("LoadMoreButton", () => {
  it("renderiza el boton cuando hay mas articulos para mostrar", () => {
    (useArticles as jest.Mock).mockReturnValueOnce({
      articles: mockArticles,
      amountToDisplay: 9,
      loadMoreArticles: jest.fn(),
      subtype7Articles: mockSubType7Articles,
    });

    render(<LoadMoreButton />);

    const button = screen.getByRole("button", {
      name: /más notas de acumulado grilla/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("no renderiza el boton cuando no hay mas articulos para mostrar", () => {
    (useArticles as jest.Mock).mockReturnValueOnce({
      articles: mockArticles,
      amountToDisplay: 100,
      loadMoreArticles: jest.fn(),
      subtype7Articles: mockSubType7Articles,
    });

    render(<LoadMoreButton />);

    const button = screen.queryByRole("button", {
      name: /más notas de acumulado grilla/i,
    });
    expect(button).not.toBeInTheDocument();
  });

  it("invoca la funcion loadMoreArticles cuando el boton es clickeado", () => {
    const loadMoreArticlesMock = jest.fn();

    (useArticles as jest.Mock).mockReturnValueOnce({
      articles: mockArticles,
      amountToDisplay: 9,
      loadMoreArticles: loadMoreArticlesMock,
      subtype7Articles: mockSubType7Articles,
    });

    render(<LoadMoreButton />);

    const button = screen.getByTestId("load-more-btn");
    fireEvent.click(button);

    expect(loadMoreArticlesMock).toHaveBeenCalledWith(9);
  });
});
