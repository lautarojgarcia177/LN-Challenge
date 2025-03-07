"use client";

import { Article } from "@/types";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface ArticlesContextType {
  articles: Article[];
  amountToDisplay: number;
  loadMoreArticles: (amount: number) => void;
  subtype7Articles: Article[];
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(
  undefined
);

export function ArticlesProvider({
  articles,
  initialAmountToDisplay,
  children,
}: {
  articles: Article[];
  initialAmountToDisplay: number;
  children: ReactNode;
}) {
  const [amountToDisplay, setAmountToDisplay] = useState(
    initialAmountToDisplay
  );

  const subtype7Articles = useMemo(
    () => articles.filter((article) => article.subtype === "7"),
    [articles]
  );

  function loadMoreArticles(amount: number) {
    setAmountToDisplay((current) =>
      Math.min(current + amount, subtype7Articles.length)
    );
  }

  return (
    <ArticlesContext.Provider
      value={{ articles, amountToDisplay, loadMoreArticles, subtype7Articles }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  const context = useContext(ArticlesContext);

  if (context === undefined) {
    throw new Error(
      "El hook useArticles debe ser utilizado dentro de un ArticlesProvider"
    );
  }

  return context;
}
