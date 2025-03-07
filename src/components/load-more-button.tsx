"use client";

import { useArticles } from "@/context/articles-context";

export default function LoadMoreButton() {
  const { amountToDisplay, loadMoreArticles, subtype7Articles } = useArticles();

  // Si no hay mas articulos que mostrar, no renderizar el boton
  if (subtype7Articles.length >= amountToDisplay) {
    return (
      <button data-testid="load-more-btn" className="--btn --secondary" onClick={() => loadMoreArticles(9)}>
        MÁS NOTAS DE ACUMULADO GRILLA
      </button>
    );
  }

  return null;
}
