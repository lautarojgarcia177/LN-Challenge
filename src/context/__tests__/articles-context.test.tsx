import { render, renderHook, act } from "@testing-library/react";
import { ArticlesProvider, useArticles } from "../articles-context";
import { mockArticles } from "@/__mocks__/articles.mock";

const TestComponent = () => {
  const { articles, amountToDisplay, loadMoreArticles, subtype7Articles } =
    useArticles();
  return (
    <div>
      <span data-testid="articles-count">{articles.length}</span>
      <span data-testid="display-amount">{amountToDisplay}</span>
      <span data-testid="subtype7-count">{subtype7Articles.length}</span>
      <button data-testid="load-more" onClick={() => loadMoreArticles(5)}>
        Cargar mas
      </button>
    </div>
  );
};

describe("ArticlesContext", () => {
  describe("ArticlesProvider", () => {
    it("proporciona los valores correctos al contexto", () => {
      const { getByTestId } = render(
        <ArticlesProvider articles={mockArticles} initialAmountToDisplay={9}>
          <TestComponent />
        </ArticlesProvider>
      );

      expect(getByTestId("articles-count").textContent).toBe("30");
      expect(getByTestId("display-amount").textContent).toBe("9");
      expect(getByTestId("subtype7-count").textContent).toBe("28");
    });

    it("actualiza amountToDisplay cuando se llama a loadMoreArticles", () => {
      const { getByTestId } = render(
        <ArticlesProvider articles={mockArticles} initialAmountToDisplay={6}>
          <TestComponent />
        </ArticlesProvider>
      );

      expect(getByTestId("display-amount").textContent).toBe("6");

      // Click the load more button
      act(() => {
        getByTestId("load-more").click();
      });

      expect(getByTestId("display-amount").textContent).toBe("11");
    });

    it("filtra correctamente los artículos con subtype 7", () => {
      const { getByTestId } = render(
        <ArticlesProvider articles={mockArticles} initialAmountToDisplay={6}>
          <TestComponent />
        </ArticlesProvider>
      );

      expect(getByTestId("subtype7-count").textContent).toBe("28");
    });
  });

  describe("useArticles", () => {
    it("lanza un error cuando se usa fuera de ArticlesProvider", () => {
      // Silence the error console during this test
      const originalError = console.error;
      console.error = jest.fn();

      expect(() => {
        renderHook(() => useArticles());
      }).toThrow(
        "El hook useArticles debe ser utilizado dentro de un ArticlesProvider"
      );

      // Restaurar console.error
      console.error = originalError;
    });

    it("devuelve el contexto cuando se usa dentro de ArticlesProvider", () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ArticlesProvider articles={mockArticles} initialAmountToDisplay={9}>
          {children}
        </ArticlesProvider>
      );

      const { result } = renderHook(() => useArticles(), { wrapper });

      expect(result.current.articles).toEqual(mockArticles);
      expect(result.current.amountToDisplay).toBe(9);
      expect(result.current.subtype7Articles).toHaveLength(28);
      expect(typeof result.current.loadMoreArticles).toBe("function");
    });

    it("incrementa amountToDisplay cuando se llama a loadMoreArticles", () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ArticlesProvider articles={mockArticles} initialAmountToDisplay={6}>
          {children}
        </ArticlesProvider>
      );

      const { result } = renderHook(() => useArticles(), { wrapper });

      act(() => {
        result.current.loadMoreArticles(5);
      });

      expect(result.current.amountToDisplay).toBe(11);
    });
  });
});
